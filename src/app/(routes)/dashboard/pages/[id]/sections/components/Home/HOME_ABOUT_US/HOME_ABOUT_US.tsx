import Form from "@/components/UI/Form/Form";
import { IPage } from "@/types/Pages/pages.types";
import { ISection } from "@/types/Pages/Sections/Sections.types";
import VALIDATION from "@/utils/validations";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import HEADER from "./HEADER/HEADER";
import TABS from "./TABS/TABS";
import BODY from "./BODY/BODY";
import ACTIONS from "./ACTIONS/ACTIONS";

type IProps = {
  page_id?: IPage["_id"];
  section?: ISection;
};

export default function HOME_ABOUT_US(props: IProps) {
  const { section, page_id } = props;

  const isCreating = section === undefined;
  const isUpdating = section !== undefined;

  const formik = useFormik<ISection>({
    initialValues: {
      _id: "",
      name: "",
      type: "UNSET",
      components: {
        EN: {
          description: "",
          title: "",
          agents: [
            {
              name: "",
              image: undefined as any,
              role: "",
            },
            {
              name: "",
              image: undefined as any,
              role: "",
            },
            {
              name: "",
              image: undefined as any,
              role: "",
            },
          ],
        },
        FA: {
          description: "",
          title: "",
          agents: [
            {
              name: "",
              image: undefined as any,
              role: "",
            },
            {
              name: "",
              image: undefined as any,
              role: "",
            },
            {
              name: "",
              image: undefined as any,
              role: "",
            },
          ],
        },
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
          ACTIONS: ACTIONS,
        };
      }}
    </Form>
  );
}
