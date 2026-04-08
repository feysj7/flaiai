import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
