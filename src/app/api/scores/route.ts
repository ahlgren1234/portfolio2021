import { NextResponse } from 'next/server';
import Redis from 'ioredis';

interface Score {
  name: string;
  score: number;
  date: string;
}

const SCORES_KEY = 'game_scores';

// Initialize Redis client
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function GET() {
  try {
    const scoresJson = await redis.get(SCORES_KEY);
    const scores = scoresJson ? JSON.parse(scoresJson) : [];
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

    // Read existing scores
    const scoresJson = await redis.get(SCORES_KEY);
    const scores = scoresJson ? JSON.parse(scoresJson) : [];
    
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
    
    // Save back to Redis
    await redis.set(SCORES_KEY, JSON.stringify(sortedScores));
    
    return NextResponse.json(sortedScores);
  } catch (error) {
    console.error('Error in POST /api/scores:', error);
    return NextResponse.json([], { status: 200 });
  }
} 