import { NextResponse } from 'next/server';

interface Score {
  name: string;
  score: number;
  date: string;
}

// In-memory storage for scores
let scores: Score[] = [];

export async function GET() {
  try {
    return NextResponse.json(scores);
  } catch (error) {
    console.error('Error in GET /api/scores:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const newScore = await request.json();
    
    // Validate new score
    if (!newScore || typeof newScore.name !== 'string' || typeof newScore.score !== 'number') {
      return NextResponse.json(
        { error: 'Invalid score data' },
        { status: 400 }
      );
    }

    // Add new score
    scores.push({
      name: newScore.name,
      score: newScore.score,
      date: new Date().toISOString()
    });
    
    // Sort by score and keep only top 10
    scores = scores
      .sort((a: Score, b: Score) => b.score - a.score)
      .slice(0, 10);
    
    return NextResponse.json(scores);
  } catch (error) {
    console.error('Error in POST /api/scores:', error);
    return NextResponse.json([], { status: 200 });
  }
} 