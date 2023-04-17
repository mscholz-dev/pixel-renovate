import React, {
  FC,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import FormInput from "@/templates/components/Form/FormInput";
import FormCheckbox from "@/templates/components/Form/FormCheckbox";
import FormTextarea from "@/templates/components/Form/FormTextarea";
import FormClass from "@/utils/Form";
import IconLoader from "@/public/icons/loader.svg";
import FormPage from "./FormPage";
import IconUser from "@/public/icons/user.svg";
import IconContact from "@/public/icons/contact.svg";
import IconPhone from "@/public/icons/phone.svg";
import IconEnvelopes from "@/public/icons/envelopes.svg";
import IconCity from "@/public/icons/city.svg";
import IconBellConcierge from "@/public/icons/bell-concierge.svg";
import IconMagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import { motion } from "framer-motion";
import FormInputMotion from "./FormInputMotion";

// services data
import computersData from "@/utils/data/services/computers";
import consolesData from "@/utils/data/services/consoles";
import mobilesData from "@/utils/data/services/mobiles";
import webData from "@/utils/data/services/web";
import keyboardsData from "@/utils/data/services/keyboards";

// classes
import FramerMotion from "@/utils/FramerMotion";
const Form = new FormClass();

// interfaces
import { IFormSupport } from "@/utils/interfaces";

const FormSupport: FC<IFormSupport> = ({
  loading,
  form,
  setForm,
  handleSubmit,
  service,
}) => {
  const deviceService =
    service === computersData.service ||
    service === consolesData.service ||
    service === mobilesData.service ||
    service === keyboardsData.service;

  const inputsDelay = {
    fullName: 0,
    email: 1,
    phone: 2,
    postalCode: 3,
    city: 4,
    brand: deviceService ? 5 : 0,
    model: deviceService ? 6 : 0,
    title: deviceService ? 7 : 5,
    description: deviceService ? 8 : 6,
    consent: deviceService ? 9 : 7,
    btn: deviceService ? 10 : 8,
  };

  const [img, setImg] = useState({
    src: `${computersData.servicePath}/mac-gradient-semi-open`,
    alt: "Mac entre ouvert avec un reflet coloré",
  });

  const handleAsideImg = (): void => {
    switch (service) {
      case computersData.service:
        setImg({
          src: `${computersData.servicePath}/motherboard`,
          alt: "Carte mère vue de dessus",
        });
        return;

      case consolesData.service:
        setImg({
          src: `${consolesData.servicePath}/ps5-gradient`,
          alt: "PS5 blanche avec sa manette blanche",
        });
        return;

      case mobilesData.service:
        setImg({
          src: `${mobilesData.servicePath}/iphone-case`,
          alt: "Coques d'IPhone colorées",
        });
        return;

      case webData.service:
        setImg({
          src: `${webData.servicePath}/mac-with-book`,
          alt: "Mac ayant un site e-commerce sur son écran",
        });
        return;

      case keyboardsData.service:
        setImg({
          src: `${keyboardsData.servicePath}/keyboard-white`,
          alt: "Clavier blanc avec sa sourie blanche Apple",
        });
        return;

      default:
        return;
    }
  };

  useEffect(() => {
    handleAsideImg();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormPage imgSrc={img.src} imgAlt={img.alt}>
      <form onSubmit={handleSubmit}>
        <FormInputMotion
          delay={inputsDelay.fullName}
        >
          <FormInput
            icon={<IconUser />}
            id="fullName"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "fullName",
                setForm,
                form,
              )
            }
            label="Nom et prénom"
            type="text"
            value={form.fullName}
            min={0}
            max={60}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion
          delay={inputsDelay.email}
        >
          <FormInput
            icon={<IconContact />}
            id="email"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "email",
                setForm,
                form,
              )
            }
            label="Email"
            type="email"
            value={form.email}
            min={0}
            max={255}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion
          delay={inputsDelay.phone}
        >
          <FormInput
            icon={<IconPhone />}
            id="phone"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "phone",
                setForm,
                form,
              )
            }
            label="Numéro de téléphone"
            type="number"
            value={form.phone}
            min={0}
            max={10}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion
          delay={inputsDelay.postalCode}
        >
          <FormInput
            icon={<IconEnvelopes />}
            id="postalCode"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "postalCode",
                setForm,
                form,
              )
            }
            label="Code postal"
            type="number"
            value={form.postalCode}
            min={0}
            max={5}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion delay={inputsDelay.city}>
          <FormInput
            icon={<IconCity />}
            id="city"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "city",
                setForm,
                form,
              )
            }
            label="Ville"
            type="text"
            value={form.city}
            min={0}
            max={60}
            ariaDescribedby=""
          />
        </FormInputMotion>

        {deviceService ? (
          <>
            <FormInputMotion
              delay={inputsDelay.brand}
            >
              <FormInput
                icon={<IconMagnifyingGlass />}
                id="brand"
                handleChange={(e: ChangeEvent) =>
                  Form.handleChange(
                    e,
                    "brand",
                    setForm,
                    form,
                  )
                }
                label="Marque"
                type="text"
                value={form.brand}
                min={0}
                max={60}
                ariaDescribedby=""
              />
            </FormInputMotion>

            <FormInputMotion
              delay={inputsDelay.model}
            >
              <FormInput
                icon={<IconMagnifyingGlass />}
                id="model"
                handleChange={(e: ChangeEvent) =>
                  Form.handleChange(
                    e,
                    "model",
                    setForm,
                    form,
                  )
                }
                label="Modèle"
                type="text"
                value={form.model}
                min={0}
                max={60}
                ariaDescribedby=""
              />
            </FormInputMotion>
          </>
        ) : (
          <></>
        )}

        <FormInputMotion
          delay={inputsDelay.title}
        >
          <FormInput
            icon={<IconBellConcierge />}
            id="title"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "title",
                setForm,
                form,
              )
            }
            label="Prestation"
            type="text"
            value={form.title}
            min={0}
            max={255}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion
          delay={inputsDelay.description}
        >
          <FormTextarea
            id="description"
            handleChange={(e: ChangeEvent) =>
              Form.handleChange(
                e,
                "description",
                setForm,
                form,
              )
            }
            label="Description de la demande"
            value={form.description}
            min={0}
            max={5_000}
            ariaDescribedby=""
            rows={4}
          />
        </FormInputMotion>

        <FormInputMotion
          delay={inputsDelay.consent}
        >
          <FormCheckbox
            id="consent"
            handleChange={(e: ChangeEvent) =>
              Form.handleCheckboxChange(
                e,
                "consent",
                setForm,
                form,
              )
            }
            label="J'accepte que mes données soient traitées dans le cadre de ma demande"
            checked={form.consent}
            ariaDescribedby=""
          />
        </FormInputMotion>

        <FormInputMotion delay={inputsDelay.btn}>
          <button className="form-support-btn">
            {!loading ? (
              "Envoyer ma demande"
            ) : (
              <IconLoader className="form-support-btn-icon-loader" />
            )}
          </button>
        </FormInputMotion>
      </form>
    </FormPage>
  );
};

export default FormSupport;
