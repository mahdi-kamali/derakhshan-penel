import Form from "@/components/UI/Form/Form";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import VALIDATION from "@/utils/validations";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import HEADER from "./HEADER";
import TABS from "./TABS/TABS";
import BODY from "./BODY";
import ACTIONS from "./ACTIONS";

type IProps = {
  page_id?: IPage["_id"];
  section?: ISection;
};

export default function HOME_HERO(props: IProps) {
  const { section, page_id } = props;

  const isCreating = section === undefined;
  const isUpdating = section !== undefined;

  const formik = useFormik<ISection>({
    initialValues: {
      _id: "",
      name: "",
      type: "HOME_HERO",
      components: {
        EN: {
          experience: "",
          logo: "",
          tagline: "",
        },
        FA: {
          experience: "",
          logo: "",
          tagline: "",
        },
      },
      isActive: true,
      createdAt: "",
      updatedAt: "",
    },
    validationSchema: VALIDATION.PAGE.SECTION,
    onSubmit(values, formikHelpers) {},
  });

  const { setValues } = formik;

  useEffect(() => {
    if (isCreating) return;
    setValues({ ...section!! });
  }, [section]);

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
          BODY: BODY,
          ACTIONS: () =>
            ACTIONS({
              formik: formik,
              isCreating,
              isUpdating,
              page_id,
              section_id: section?._id,
            }),
        };
      }}
    </Form>
  );
}
