// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    
    // Log the entire webhook payload to see what Strapi sends
    console.log('Webhook received:', JSON.stringify(body, null, 2))
    
    // Strapi sends different structures, check both
    const contentType = body.model || body.entry?.model || body.uid
    
    console.log('Content type:', contentType)
    
      const tagMap: Record<string, string> = {
      'gallery-image': 'gallery',
      'prayergroup': 'prayergroups', // Note: might be singular in webhook
      'homepage': 'homepage',
      'event': 'events', // Note: might be singular
      'convention': 'conventions', // Note: might be singular
      'sermon': 'sermons', // Note: might be singular
    }
    
    const tag = tagMap[contentType] || 'all'
    
    console.log('Revalidating tag:', tag)
    revalidateTag(tag)
    
    return NextResponse.json({ 
      revalidated: true, 
      contentType,
      tag,
      time: new Date().toISOString() 
    })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}