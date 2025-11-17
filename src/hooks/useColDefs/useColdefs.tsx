import Icon from "@/components/UI/Icon/Icon";
import Cell from "@/components/UI/Table/components/Cells/Cell";
import { IPage } from "@/types/Pages/pages.types";
import {
  CONTACT_US_STATUS_OPTIONS,
  ICAREER_IS_ACTIVE,
  ICAREER_TYPES,
  IOption,
  IROLE_OPTIONS,
  ORDERS_INDUSTRY_OPTIONS,
  PAGES_STATUS_OPTIONS,
} from "@/types/Variables";
import useRedirect from "../useRedirect";
import { dateToJalai } from "@/utils/Converters";
import { IMAGE_URL } from "@/common/urls/urls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteCareerByIDAPI,
  GetCareersAPI,
  UpdateCareerAPI,
} from "@/services/Careers/Careers.services";
import { ShowQuestion } from "@/common/toast/toast";
import { Grid } from "@/components/UI";
import { ICareer } from "@/types/Career/Career.types";
import { IContactUs } from "@/types/Contact-us/Contact_us.types";
import { IUser } from "@/types/User/user.types";
import { IColDef } from "./useColdefs.types";
import {
  GetContactUsAPI,
  UpdateContactUsAPI,
} from "@/services/Contact-us/Contact_us.services";
import { IOrder } from "@/types/Orders/Orders.types";
import {
  DeleteOrderByIdAPI,
  GetOrdersAPI,
} from "@/services/Orders/Orders.services";
import { IProudct } from "@/types/Product/Product.types";
import {
  DeleteProductByIdAPI,
  GetProductsAPI,
} from "@/services/Products/Products.services";
import { ICategory } from "@/types/Category/Category.types";
import {
  DeleteCategoryAPI,
  GetCateogiresAPI,
} from "@/services/Category/Category.services";
import {
  DeletePageAPI,
  GetPagesAPI,
  UpdatePageAPI,
} from "@/services/Pages/Pages.services";

export default function useColdefs() {
  const { admin } = useRedirect();
  const queryClient = useQueryClient();

  const { mutate: DeleteCareer } = useMutation({
    mutationFn: DeleteCareerByIDAPI,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [GetCareersAPI.name] });
    },
  });

  const { mutate: UpdateCareer } = useMutation({
    mutationFn: UpdateCareerAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GetCareersAPI.name] });
    },
  });

  const { mutate: UpdateContactUs } = useMutation({
    mutationFn: UpdateContactUsAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetContactUsAPI.name],
      });
    },
  });

  const { mutate: DeleteOrder } = useMutation({
    mutationFn: DeleteOrderByIdAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetOrdersAPI.name],
      });
    },
  });

  const { mutate: DeleteProduct } = useMutation({
    mutationFn: DeleteProductByIdAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetProductsAPI.name],
      });
    },
  });

  const { mutate: DeleteCategory } = useMutation({
    mutationFn: DeleteCategoryAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetCateogiresAPI.name],
      });
    },
  });

  const { mutate: DeletePage } = useMutation({
    mutationFn: DeletePageAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPagesAPI.name],
      });
    },
  });

  const { mutate: UpdatePage } = useMutation({
    mutationFn: UpdatePageAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetPagesAPI.name],
      });
    },
  });

  // ---------------- USERS ----------------
  const usersColDef: IColDef<IUser>[] = [
    { headerName: "شماره تلفن", field: "phone", type: "TEXT" },
    { headerName: "نام", field: "name", type: "TEXT" },
    {
      headerName: "نقش",
      field: "role",
      type: "STATUS",
      cellRendererParams: { OPTIONS: IROLE_OPTIONS },
    },
    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      type: "DATE",
    },
    {
      headerName: "آخرین بروزرسانی",
      field: "updatedAt",
      type: "DATE",
    },
    {
      headerName: "عملیات",
      field: "_id",
      minWidth: 180,
      type: "ACTIONS",
      cellRenderer: ({ value }) => (
        <Cell.Container>
          <Cell.Button
            variant='success'
            icon={<Icon icon='line-md:edit-filled' />}
            onClick={() => admin.users.update(value)}
            title='ویرایش'
            loading={false}
          />
        </Cell.Container>
      ),
    },
  ];

  // ---------------- PAGES ----------------
  const pagesColDef: IColDef<IPage>[] = [
    { headerName: "عنوان", field: "title", type: "TEXT" },
    { headerName: "عنوان لاتین", field: "title_en", type: "TEXT" },
    { headerName: "اسلاگ", field: "slug", type: "TEXT" },
    {
      headerName: "محتوا",
      field: "sections",
      type: "ACTIONS",
      cellRenderer: ({ data }) => (
        <Cell.Button
          title='ویرایش'
          icon={<Icon icon='line-md:edit-filled' />}
          onClick={() => admin.pages.sections.edit(data._id)}
          variant='warning'
        />
      ),
    },
    {
      field: "status",
      headerName: "وضعیت",
      type: "STATUS",
      cellRendererParams: { OPTIONS: PAGES_STATUS_OPTIONS },
      minWidth: 150,
    },
    {
      type: "SWITCH",
      cellRendererParams: {
        onChange(value, data) {
          ShowQuestion({
            onConfirm() {
              UpdatePage({
                ...data,
                nav: {
                  ...data.nav,
                  show: value,
                },
              });
            },
          });
        },
      },
      field: "nav.show",
      headerName: "نمایش در هدر",
      minWidth: 200,
    },
    {
      type: "ACTIONS",
      field: "_id",
      headerName: "عملیات",
      cellRenderer({ value }) {
        return (
          <Cell.Container gap={"0.5rem"}>
            <Cell.Button
              title='حذف'
              icon={<Icon icon='ic:round-delete' />}
              onClick={() => {
                ShowQuestion({
                  onConfirm() {
                    DeletePage(value);
                  },
                });
              }}
              variant='danger'
            />
            <Cell.Button
              title='ویرایش'
              icon={<Icon icon='tdesign:edit-2-filled' />}
              onClick={() => admin.pages.update(value)}
              variant='warning'
            />
          </Cell.Container>
        );
      },
      minWidth: 180,
    },
  ];

  // ---------------- CAREERS ----------------
  // const careersColDef: IColDef<ICareer>[] = [
  //   {
  //     field: "image",
  //     headerName: "تصویر",
  //     type: "TEXT",
  //     cellRenderer: ({ value }) => {
  //       const path = value?.path;
  //       return (
  //         <img
  //           src={IMAGE_URL(path)}
  //           alt=''
  //           style={{ objectFit: "contain", width: "100%" }}
  //         />
  //       );
  //     },
  //   },
  //   { field: "title", headerName: "عنوان", minWidth: 200, type: "TEXT" },
  //   {
  //     field: "description",
  //     headerName: "توضیحات",
  //     type: "TOOLTIP",
  //     cellRenderer: ({ value }) => (
  //       <Cell.ToolTip
  //         icon={<Icon icon='fluent-mdl2:view' />}
  //         label='مشاهده'
  //         variant='success'>
  //         <p>{value}</p>
  //       </Cell.ToolTip>
  //     ),
  //   },
  //   {
  //     field: "skills",
  //     headerName: "مهارت‌ها",
  //     type: "TOOLTIP",
  //     cellRenderer: ({ value }) => (
  //       <Cell.ToolTip
  //         icon={<Icon icon='fluent-mdl2:view' />}
  //         label='مشاهده'
  //         variant='success'>
  //         <Grid gap='0.5rem'>
  //           {value.map((val: string, i: number) => (
  //             <Grid
  //               key={i}
  //               type='flex'
  //               alignItems='center'
  //               gap='0.5rem'>
  //               <Icon
  //                 icon='tdesign:circle-filled'
  //                 fontSize='0.5rem'
  //               />
  //               <span>{val}</span>
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </Cell.ToolTip>
  //     ),
  //   },
  //   {
  //     headerName: "وضعیت",
  //     field: "isActive",
  //     type: "STATUS",
  //     cellRendererParams: { OPTIONS: ICAREER_IS_ACTIVE },
  //   },
  //   {
  //     headerName: "نوع",
  //     field: "type",
  //     type: "SELECT",
  //     minWidth: 200,
  //     cellRendererParams: {
  //       OPTIONS: ICAREER_TYPES,
  //       onChange: (value: IOption, data: ICareer) => {
  //         ShowQuestion({
  //           onConfirm() {
  //             UpdateCareer({ ...data, type: value.value });
  //           },
  //         });
  //       },
  //     },
  //   },
  //   {
  //     field: "updatedAt",
  //     headerName: "تاریخ بروزرسانی",
  //     type: "DATE",
  //     cellRenderer: ({ value }) => (
  //       <Cell.Container>
  //         <p>{dateToJalai(value)}</p>
  //       </Cell.Container>
  //     ),
  //   },
  //   {
  //     field: "_id",
  //     headerName: "عملیات",
  //     minWidth: 200,
  //     type: "ACTIONS",
  //     cellRenderer: ({ value }) => (
  //       <Cell.Container gap='0.5rem'>
  //         <Cell.Button
  //           title='ویرایش'
  //           variant='warning'
  //           onClick={() => admin.careers.edit(value)}
  //           icon={<Icon icon='line-md:edit-filled' />}
  //         />
  //         <Cell.Button
  //           title='حذف'
  //           variant='danger'
  //           onClick={() =>
  //             ShowQuestion({
  //               onConfirm() {
  //                 DeleteCareer(value);
  //               },
  //             })
  //           }
  //           icon={<Icon icon='material-symbols-light:delete-rounded' />}
  //         />
  //       </Cell.Container>
  //     ),
  //   },
  // ];

  // ---------------- CONTACT US ----------------
  const contactUsColDef: IColDef<IContactUs>[] = [
    { headerName: "نام", field: "firstName", type: "TEXT" },
    {
      headerName: "نام خانوادگی",
      field: "lastName",
      type: "TEXT",
    },
    { headerName: "تلفن", field: "phone", type: "TEXT" },
    { headerName: "ایمیل", field: "email", type: "TEXT" },
    { headerName: "وبسایت", field: "website", type: "TEXT" },
    {
      headerName: "آدرس",
      field: "address",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <p>{value}</p>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "پیام",
      field: "message",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده'
          variant='success'>
          <p>{value}</p>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "وضعیت",
      field: "status",
      type: "SELECT",
      minWidth: 160,
      cellRendererParams: {
        OPTIONS: CONTACT_US_STATUS_OPTIONS,
        onChange(value, data) {
          ShowQuestion({
            onConfirm() {
              UpdateContactUs({
                ...data,
                status: value.value,
              });
            },
          });
        },
      },
    },
    { headerName: "تاریخ ایجاد", field: "createdAt", type: "DATE" },
    { headerName: "تاریخ بروزرسانی", field: "updatedAt", type: "DATE" },
  ];

  const ordersColDef: IColDef<IOrder>[] = [
    // ---- USER INFO ----
    { headerName: "نام", field: "user.name", type: "TEXT" },
    { headerName: "نام خانوادگی", field: "user.family", type: "TEXT" },
    { headerName: "تلفن", field: "user.phone", type: "TEXT" },
    { headerName: "ایمیل", field: "user.email", type: "TEXT" },
    { headerName: "کشور", field: "user.country", type: "TEXT" },

    // ---- PRODUCT INFO ----
    { headerName: "نوع محصول", field: "product.type", type: "TEXT" },
    { headerName: "وزن (گرم)", field: "product.weight", type: "TEXT" },
    { headerName: "تعداد", field: "product.quantity", type: "TEXT" },
    {
      headerName: "ابعاد",
      field: "product.dimensions",
      type: "TOOLTIP",
      cellRenderer: ({ value }) => {
        const { height, length, width } = value;
        return (
          <Cell.ToolTip
            icon={<Icon icon='fluent-mdl2:view' />}
            label='مشاهده ابعاد'
            variant='success'>
            <Grid>
              <li>
                <span>طول : {length}</span>
              </li>
              <li>
                <span>عرض : {width}</span>
              </li>
              <li>
                <span>ارتفاع : {height}</span>
              </li>
            </Grid>
          </Cell.ToolTip>
        );
      },
      exportRender({ value }) {
        const { height, length, width } = value;
        return (
          <Grid>
            <li>
              <span>طول : {length}</span>
            </li>
            <li>
              <span>عرض : {width}</span>
            </li>
            <li>
              <span>ارتفاع : {height}</span>
            </li>
          </Grid>
        );
      },
    },
    {
      headerName: "تصویر",
      field: "product.image",
      type: "IMAGE",
    },

    // ---- ORDER INFO ----
    { headerName: "نام شرکت", field: "companyName", type: "TEXT" },
    {
      headerName: "صنعت",
      field: "industry",
      type: "STATUS",
      minWidth: 200,
      cellRendererParams: {
        OPTIONS: ORDERS_INDUSTRY_OPTIONS,
      },
    },

    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      type: "DATE",
    },
    // ---- ACTIONS ----
    {
      headerName: "عملیات",
      field: "_id",
      minWidth: 100,
      type: "ACTIONS",
      cellRenderer: ({ value }) => (
        <Cell.Container gap='0.5rem'>
          <Cell.Button
            title='حذف'
            variant='danger'
            onClick={() => {
              ShowQuestion({
                onConfirm() {
                  DeleteOrder(value);
                },
              });
            }}
            icon={<Icon icon='material-symbols-light:delete-rounded' />}
          />
        </Cell.Container>
      ),
    },
  ];

  const productsColDef: IColDef<IProudct>[] = [
    {
      headerName: "تصویر اصلی",
      field: "image",
      type: "IMAGE",
      cellRenderer: ({ value }) => (
        <img
          src={IMAGE_URL(value?.path)}
          alt={value?.originalname || "product"}
          style={{ objectFit: "contain", width: "100%", maxHeight: "80px" }}
        />
      ),
    },
    {
      headerName: "گالری",
      field: "gallery",
      type: "TOOLTIP",
      minWidth: 200,
      cellRenderer: ({ value }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده تصاویر'
          variant='success'>
          <Grid
            gap='0.5rem'
            gridTemplateColumns={"repeat(2,1fr)"}>
            {value?.length ? (
              value.map((img: any, i: number) => (
                <img
                  key={i}
                  src={IMAGE_URL(img.path)}
                  alt={img.originalname}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ))
            ) : (
              <p>بدون تصویر</p>
            )}
          </Grid>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "عنوان",
      field: "title",
      type: "TEXT",
      minWidth: 200,
    },
    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      type: "DATE",
    },
    {
      headerName: "تاریخ بروزرسانی",
      field: "updatedAt",
      type: "DATE",
    },
    {
      headerName: "عملیات",
      field: "_id",
      type: "ACTIONS",
      minWidth: 200,
      cellRenderer: ({ value }) => (
        <Cell.Container gap='0.5rem'>
          <Cell.Button
            title='ویرایش'
            variant='warning'
            onClick={() => admin.products.edit(value)}
            icon={<Icon icon='line-md:edit-filled' />}
          />
          <Cell.Button
            title='حذف'
            variant='danger'
            onClick={() =>
              ShowQuestion({
                onConfirm() {
                  DeleteProduct(value);
                },
              })
            }
            icon={<Icon icon='material-symbols-light:delete-rounded' />}
          />
        </Cell.Container>
      ),
    },
  ];

  const categoriesColDef: IColDef<ICategory>[] = [
    {
      headerName: "تصویر اصلی",
      field: "image",
      type: "IMAGE",
      cellRenderer: ({ value }) => (
        <img
          src={IMAGE_URL(value?.path)}
          alt={value?.originalname || "product"}
          style={{ objectFit: "contain", width: "100%", maxHeight: "80px" }}
        />
      ),
    },
    {
      headerName: "محصولات",
      field: "products",
      type: "TOOLTIP",
      minWidth: 200,
      cellRenderer: ({ value }: { value: ICategory["products"] }) => (
        <Cell.ToolTip
          icon={<Icon icon='fluent-mdl2:view' />}
          label='مشاهده تصاویر'
          variant='success'>
          <Grid
            gap='0.5rem'
            gridTemplateColumns={"repeat(2,1fr)"}>
            {value?.length ? (
              value.map((product, i: number) => {
                return (
                  <img
                    key={i}
                    src={IMAGE_URL(product.image.path)}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                );
              })
            ) : (
              <p>بدون تصویر</p>
            )}
          </Grid>
        </Cell.ToolTip>
      ),
    },
    {
      headerName: "عنوان",
      field: "title",
      type: "TEXT",
      minWidth: 200,
    },
    {
      headerName: "تاریخ ایجاد",
      field: "createdAt",
      type: "DATE",
    },
    {
      headerName: "عملیات",
      field: "_id",
      type: "ACTIONS",
      minWidth: 200,
      cellRenderer: ({ value }) => (
        <Cell.Container gap='0.5rem'>
          <Cell.Button
            title='ویرایش'
            variant='warning'
            onClick={() => admin.products.categories.edit(value)}
            icon={<Icon icon='line-md:edit-filled' />}
          />
          <Cell.Button
            title='حذف'
            variant='danger'
            onClick={() =>
              ShowQuestion({
                onConfirm() {
                  DeleteCategory(value);
                },
              })
            }
            icon={<Icon icon='material-symbols-light:delete-rounded' />}
          />
        </Cell.Container>
      ),
    },
  ];

  return {
    pagesColDef,
    usersColDef,
    // careersColDef,
    contactUsColDef,
    ordersColDef,
    productsColDef,
    categoriesColDef,
  };
}
