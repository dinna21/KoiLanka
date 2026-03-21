import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Koi from '@/models/Koi';
import { auth } from '@/lib/auth/auth.config';

// GET all koi or filter by query params
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const breed = searchParams.get('breed');
    const breeder = searchParams.get('breeder');
    const available = searchParams.get('available');

    const query: Record<string, unknown> = {};

    if (breed) query.breed = breed;
    if (breeder) query.breederName = breeder;
    if (available) query.available = available === 'true';

    const koi = await Koi.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: koi }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST create new koi (requires authentication)
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || !['breeder', 'admin'].includes((session.user as { role?: string })?.role || '')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const body = await request.json();
    const koi = await Koi.create(body);

    return NextResponse.json({ success: true, data: koi }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}
