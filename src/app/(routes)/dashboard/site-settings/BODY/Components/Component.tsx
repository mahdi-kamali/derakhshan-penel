import IconSelect from "@/components/common/IconSelect/IconSelect";
import { Button, Field, Grid, Group } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import { IColDef } from "@/hooks/useColDefs/useColdefs.types";
import { LanguagesENUM } from "@/types/Language/Language.types";
import { ISiteSettings } from "@/types/Site-Settings/SiteSettings.types";
import { FormikContextType } from "formik";

interface IProps {
  language: LanguagesENUM;
  formik: FormikContextType<ISiteSettings>;
}

export default function Component(props: IProps) {
  const { formik, language } = props;
  const { handleChange, setFieldValue } = formik;

  const components = { EN: formik.values.EN, FA: formik.values.FA };

  const values = components[language];

  const field = (name: IColDef<typeof values>["field"]) => {
    return `${language}.${name}`;
  };

  return (
    <Grid
      color='black'
      gap={"1rem"}
      paddingBottom={"2em"}>
      <Grid
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}>
        <Field.Text
          variant='light'
          name={field("email")}
          icon={<Icon icon='ic:baseline-attach-email' />}
          onChange={handleChange}
          title='ایمیل'
          type='text'
          value={values.email}
          dir='ltr'
        />

        <Field.Text
          variant='light'
          name={field("phone")}
          icon={<Icon icon='line-md:phone-filled' />}
          onChange={handleChange}
          title='شماره همراه'
          type='text'
          value={values.phone}
          dir='ltr'
        />

        <Field.Text
          variant='light'
          name={field("work_time")}
          icon={<Icon icon='tdesign:time' />}
          onChange={handleChange}
          title='ساعت کاری'
          type='text'
          value={values.work_time}
        />
      </Grid>

      <Field.Text
        variant='light'
        name={field("address")}
        icon={<Icon icon='typcn:location' />}
        onChange={handleChange}
        title='آدرش'
        type='text'
        value={values.address}
        lines={3}
      />

      {/* Socials */}
      <Grid gap={"1rem"}>
        <Group
          header='فضای مجازی'
          gridTemplateColumns={"1fr 1fr"}
          maxHeight={"40rem"}
          overflow='auto'>
          {values.socials.map((social, index) => {
            const fieldName = (field: keyof typeof social) =>
              `${language}.socials[${index}].${field}`;

            const remove = () => {
              const news = values.socials.filter(
                (item, targetIndex) => targetIndex !== index,
              );
              setFieldValue(field("socials"), news);
            };

            return (
              <Grid
                backgroundColor='rgba(0,0,0,0.1)'
                borderRadius={"1rem"}
                padding={"1em"}
                gap={"1rem"}>
                <Field.Text
                  variant='light'
                  name={fieldName("label")}
                  icon={<Icon icon='ic:baseline-attach-email' />}
                  onChange={handleChange}
                  title='عنوان'
                  type='text'
                  value={social.label}
                />
                <Field.Text
                  variant='light'
                  name={fieldName("url")}
                  icon={<Icon icon='line-md:link' />}
                  onChange={handleChange}
                  title='لینک'
                  type='text'
                  value={social.url}
                />
                <IconSelect
                  onChange={(value) => {
                    setFieldValue(fieldName("icon"), value);
                  }}
                  value={social.icon}
                />
                <Button
                  type='button'
                  title='حذف'
                  variant='danger'
                  icon={<Icon icon='ic:round-delete' />}
                  onClick={remove}
                />
              </Grid>
            );
          })}
        </Group>

        <Button
          type='button'
          title='افزودن'
          variant='primary'
          icon={<Icon icon='gg:add' />}
          onClick={() => {
            const newSocial: (typeof values.socials)[0] = {
              icon: "",
              label: "",
              url: "",
            };
            const social = [...values.socials, newSocial];
            setFieldValue(field("socials"), social);
          }}
        />
      </Grid>

      {/* Links */}
      <Grid gap={"1rem"}>
        <Group
          header='لینک های مفید'
          gridTemplateColumns={"1fr 1fr"}
          maxHeight={"40rem"}
          overflow='auto'
          variant='success'>
          {values.links.map((link, index) => {
            const fieldName = (field: keyof typeof link) =>
              `${language}.links[${index}].${field}`;

            const remove = () => {
              const news = values.links.filter(
                (item, targetIndex) => targetIndex !== index,
              );
              setFieldValue(field("links"), news);
            };

            return (
              <Grid
                backgroundColor='rgba(255,0,0,0.1)'
                borderRadius={"1rem"}
                padding={"1em"}
                gap={"1rem"}>
                <Field.Text
                  variant='light'
                  name={fieldName("label")}
                  icon={<Icon icon='ic:baseline-attach-email' />}
                  onChange={handleChange}
                  title='عنوان'
                  type='text'
                  value={link.label}
                />
                <Field.Text
                  variant='light'
                  name={fieldName("href")}
                  icon={<Icon icon='line-md:link' />}
                  onChange={handleChange}
                  title='لینک'
                  type='text'
                  value={link.href}
                  dir='ltr'
                />
                <IconSelect
                  onChange={(value) => {
                    setFieldValue(fieldName("icon"), value);
                  }}
                  value={link.icon}
                />
                <Button
                  type='button'
                  title='حذف'
                  variant='danger'
                  icon={<Icon icon='ic:round-delete' />}
                  onClick={remove}
                />
              </Grid>
            );
          })}
        </Group>

        <Button
          type='button'
          title='افزودن'
          variant='primary'
          icon={<Icon icon='gg:add' />}
          onClick={() => {
            const newSocial: (typeof values.links)[0] = {
              icon: "",
              label: "",
              href: "",
            };
            const social = [...values.links, newSocial];
            setFieldValue(field("links"), social);
          }}
        />
      </Grid>

      {/* Trusts */}
      <Grid gap={"1rem"}>
        <Group
          header='نماد های الکترونیک'
          gridTemplateColumns={"1fr 1fr"}
          maxHeight={"40rem"}
          overflow='auto'
          variant='warning'>
          {values.trusts.map((trust, index) => {
            const fieldName = (field: keyof typeof trust) =>
              `${language}.trusts[${index}].${field}`;

            const remove = () => {
              const news = values.links.filter(
                (item, targetIndex) => targetIndex !== index,
              );
              setFieldValue(field("trusts"), news);
            };

            return (
              <Grid
                backgroundColor='rgba(255,0,0,0.1)'
                borderRadius={"1rem"}
                padding={"1em"}
                gap={"1rem"}>
                <Field.Image
                  type='single'
                  icon={<Icon icon='line-md:image-filled' />}
                  variant='light'
                  name={fieldName("image")}
                  onChange={(value) => setFieldValue(fieldName("image"), value)}
                  title='عکس نماد'
                  value={values.trusts[index].image}
                />
                <Field.Text
                  variant='light'
                  name={fieldName("href")}
                  icon={<Icon icon='line-md:link' />}
                  onChange={handleChange}
                  title='لینک'
                  type='text'
                  value={trust.href}
                  dir='ltr'
                />
                <Button
                  type='button'
                  title='حذف'
                  variant='danger'
                  icon={<Icon icon='ic:round-delete' />}
                  onClick={remove}
                />
              </Grid>
            );
          })}
        </Group>

        <Button
          type='button'
          title='افزودن'
          variant='primary'
          icon={<Icon icon='gg:add' />}
          onClick={() => {
            const newTrust: (typeof values.trusts)[0] = {
              href: "",
              image: undefined as any,
            };
            const trusts = [...values.trusts, newTrust];
            setFieldValue(field("trusts"), trusts);
          }}
        />
      </Grid>
    </Grid>
  );
}
