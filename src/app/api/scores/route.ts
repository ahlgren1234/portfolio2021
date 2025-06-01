import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Score {
  name: string;
  score: number;
  date: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'scores.json');

// Ensure the data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir);
  }
}

// Initialize scores file if it doesn't exist
async function initializeScoresFile() {
  try {
    await fs.access(dataFilePath);
  } catch {
    await fs.writeFile(dataFilePath, JSON.stringify([]));
  }
}

// Read scores with error handling
async function readScores(): Promise<Score[]> {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const scores = JSON.parse(fileContent);
    return Array.isArray(scores) ? scores : [];
  } catch (error) {
    console.error('Error reading scores:', error);
    return [];
  }
}

export async function GET() {
  try {
    await ensureDataDirectory();
    await initializeScoresFile();
    const scores = await readScores();
    return NextResponse.json(scores);
  } catch (error) {
    console.error('Error in GET /api/scores:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataDirectory();
    await initializeScoresFile();

    const newScore = await request.json();
    
    // Validate new score
    if (!newScore || typeof newScore.name !== 'string' || typeof newScore.score !== 'number') {
      return NextResponse.json(
        { error: 'Invalid score data' },
        { status: 400 }
      );
    }

    // Read existing scores
    const scores = await readScores();
    
    // Add new score
    scores.push({
      name: newScore.name,
      score: newScore.score,
      date: new Date().toISOString()
    });
    
    // Sort by score and keep only top 10
    const sortedScores = scores
      .sort((a: Score, b: Score) => b.score - a.score)
      .slice(0, 10);
    
    // Write back to file
    await fs.writeFile(dataFilePath, JSON.stringify(sortedScores, null, 2));
    
    return NextResponse.json(sortedScores);
  } catch (error) {
    console.error('Error in POST /api/scores:', error);
    return NextResponse.json([], { status: 200 });
  }
} 