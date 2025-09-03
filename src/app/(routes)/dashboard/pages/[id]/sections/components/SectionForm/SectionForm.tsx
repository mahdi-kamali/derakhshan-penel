import Form from "@/components/UI/Form/Form";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import VALIDATION from "@/utils/validations";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import HEADER from "./HEADER/HEADER";
import TABS from "./TABS/TABS";
import HOME_ABOUT_US_BODY from "./BODY/HOME_ABOUT_US/HOME_ABOUT_US_BODY";
import ACTIONS from "./ACTIONS/ACTIONS";
import HOME_HERO_BODY from "./BODY/HOME_HERO/HOME_HERO_BODY";

type IProps = {
  page_id?: IPage["_id"];
  section?: ISection;
};

export default function SectionForm(props: IProps) {
  const { section, page_id } = props;

  const isCreating = section === undefined;
  const isUpdating = section !== undefined;

  const formik = useFormik<ISection>({
    initialValues: {
      _id: "",
      name: "",
      type: "UNSET",
      components: {
        EN: {},
        FA: {},
      },
      isActive: true,
      createdAt: "",
      updatedAt: "",
    },
    validationSchema: VALIDATION.PAGE.SECTIONS.HOME_ABOUT_US,
    onSubmit(values, formikHelpers) {},
  });

  const { setValues } = formik;

  useEffect(() => {
    if (isCreating) return;
    setValues({ ...section!! });
  }, [section]);

  const GET_BODY = () => {
    const { type } = formik.values;

    switch (type) {
      case "HOME_HERO":
        return HOME_HERO_BODY;
      case "HOME_ABOUT_US":
        return HOME_ABOUT_US_BODY;
      default:
        return HOME_ABOUT_US_BODY;
    }
  };

  return (
    <Form
      formik={formik}
      extraProps={{
        isCreating,
        isUpdating,
        page_id,
        section_id: section?._id,
      }}>
      {() => {
        return {
          TABS: TABS,
          HEADERS: HEADER,
          BODY: GET_BODY(),
          ACTIONS: ACTIONS,
        };
      }}
    </Form>
  );
}
