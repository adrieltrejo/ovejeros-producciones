import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("Missing Resend environment variables");
      return NextResponse.json(
        { error: "El servicio de correo no está configurado." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const nombre = body.nombre?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const telefono = body.telefono?.trim() ?? "";
    const descripcion = body.descripcion?.trim() ?? "";

    if (!nombre || !email || !descripcion) {
      return NextResponse.json(
        { error: "Completa los campos obligatorios." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    const telefonoLine = telefono
      ? `<p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>`
      : "<p><strong>Teléfono:</strong> No proporcionado</p>";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nueva cotización — ${nombre}`,
      html: `
        <h2>Nueva solicitud desde ovejeros-web</h2>
        <p><strong>Nombre / Empresa:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        ${telefonoLine}
        <p><strong>Descripción del proyecto:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(descripcion)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
