import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, firma, telefon, mitarbeiteranzahl, nachricht } = body;

    // Hier würde normalerweise der E-Mail-Versand stattfinden
    // Für die Entwicklung loggen wir die Daten
    console.log('Manager-Anfrage erhalten:', {
      name,
      email,
      firma,
      telefon,
      mitarbeiteranzahl,
      nachricht,
      timestamp: new Date().toISOString(),
      zielEmail: 'fynn@vars-development.com'
    });

    // Simuliere erfolgreichen E-Mail-Versand
    // In Produktion würden Sie hier einen E-Mail-Service wie Resend, SendGrid, etc. verwenden
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Manager-Anfrage wurde erfolgreich versendet' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Versenden der Manager-Anfrage:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Fehler beim Versenden der Anfrage' 
      },
      { status: 500 }
    );
  }
}
