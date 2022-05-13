const {
    Router
} = require('express');

const nodemailer = require('nodemailer');

const router = Router();

router.post('/send-email', async (req, res) => {
    const {
        nombre,
        apellido,
        compania,
        rol,
        email,
        mensaje
    } = req.body;

    contentHTML = `

    <h2>Usuario</h2>
    
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Apellido: ${apellido}</li>
        <li>Email: ${email}</li>
        <li>Compañía: ${compania}</li>
        <li>Rol: ${rol}</li>
    </ul>

     <h2>Mensaje</h2>
    <p>${mensaje}</p>
    
    `;
    const transporter = nodemailer.createTransport({
        host: 'mail.arquitas.com.ar',
        port: 26,
        secure: false,
        auth: {
            user: 'directo7',
            pass: 'TBckb5sC3b'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: 'Arquitas Mail Server <syanov@arquitas.com.ar>',
        to: 'syanov@arquitas.com.ar',
        subject: 'Formulario de la web',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);

    res.redirect('./success.html');


})

module.exports = router;
