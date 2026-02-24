import { NextRequest, NextResponse } from 'next/server';

// Forzamos el backend a 127.0.0.1 para entorno local
const DJANGO_API_URL = 'http://127.0.0.1:8000/api';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const targetPath = path.filter(Boolean).join('/');
  const sessionId = request.headers.get('User-Session-ID');
  
  try {
    let body = {};
    const text = await request.text();
    if (text) {
      body = JSON.parse(text);
    }

    const response = await fetch(`${DJANGO_API_URL}/${targetPath}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Session-ID': sessionId || '',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy Error (POST):', error);
    return NextResponse.json({ error: 'Backend unreachable' }, { status: 502 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const targetPath = path.filter(Boolean).join('/');

  try {
    const response = await fetch(`${DJANGO_API_URL}/${targetPath}/`, {
      method: 'GET',
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy Error (GET):', error);
    return NextResponse.json({ error: 'Backend unreachable' }, { status: 502 });
  }
}
