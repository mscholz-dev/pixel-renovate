import fs from "fs";
import nodemailer from "nodemailer";
import SecurityClass from "../Security";

// classes
const Security = new SecurityClass();

// types
import {
  TCreateTransport,
  TSupportForm,
} from "../types";

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

  async supportCreateTemplate({
    fullName,
    email,
    phone,
    postalCode,
    city,
    brand,
    model,
    title,
    description,
  }: TSupportForm): Promise<void> {
    const fileClient = fs
      .readFileSync(
        `./utils/email/support/support.client.html`,
      )
      .toString();

    // manage xss at output
    const newFileClient = fileClient
      .replace(
        "$fullName",
        Security.xss(fullName),
      )
      .replace("$email", Security.xss(email))
      .replace("$phone", Security.xss(phone))
      .replace(
        "$postalCode",
        Security.xss(postalCode),
      )
      .replace("$city", Security.xss(city))
      .replace(
        "$brand",
        brand
          ? `<p><b>Marque :</b> ${Security.xss(
              brand,
            )}</p>`
          : "",
      )
      .replace(
        "$model",
        brand
          ? `<p><b>Modèle :</b> ${Security.xss(
              model,
            )}</p>`
          : "",
      )
      .replace("$title", Security.xss(title))
      .replace(
        "$description",
        Security.xss(description),
      );

    await this.send(email, title, newFileClient);

    return;
  }
}