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

export async function GET() {
  try {
    await ensureDataDirectory();
    await initializeScoresFile();
    
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const scores = JSON.parse(fileContent);
    
    return NextResponse.json(scores);
  } catch (error) {
    console.error('Error reading scores:', error);
    return NextResponse.json({ error: 'Failed to read scores' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataDirectory();
    await initializeScoresFile();

    const newScore = await request.json();
    
    // Read existing scores
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const scores = JSON.parse(fileContent);
    
    // Add new score
    scores.push({
      ...newScore,
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
    console.error('Error saving score:', error);
    return NextResponse.json({ error: 'Failed to save score' }, { status: 500 });
  }
} 