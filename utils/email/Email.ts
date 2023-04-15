import fs from "fs";
import nodemailer from "nodemailer";

// types
import { TCreateTransport } from "../types";

export default class Email {
  send(
    emailDest: string,
    emailSubject: string,
    emailMessage: string,
  ) {
    return new Promise(async (resolve, __) => {
      const transporter =
        nodemailer.createTransport({
          host: process.env.MAILER_HOST as string,
          port: Number(
            process.env.MAILER_PORT,
          ) as number,
          secure: true,
          auth: {
            user: process.env
              .MAILER_USER as string,
            pass: process.env
              .MAILER_PASSWORD as string,
          },
          service: "gmail",
        } as TCreateTransport);

      const info = await transporter.sendMail({
        from: process.env.MAILER_USER as string,
        to: emailDest,
        subject: `PIXEL RENOVATE • ${emailSubject}`,
        text: "",
        html: emailMessage,
      });

      resolve(info);
    });
  }

  async supportCreateTemplate({}): Promise<void> {
    const fileClient = fs
      .readFileSync(
        `./utils/email/support/support.client.html`,
      )
      .toString();

    const newFileClient = fileClient.replace(
      "",
      "",
    );

    await this.send("email", "", newFileClient);

    return;
  }
}
