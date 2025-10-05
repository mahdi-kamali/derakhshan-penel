import { ShowQuestion } from "@/common/toast/toast";
import { IMAGE_URL } from "@/common/urls/urls";
import { Button, Grid } from "@/components/UI";
import Icon from "@/components/UI/Icon/Icon";
import useRedirect from "@/hooks/useRedirect";
import {
  DeleteProductByIdAPI,
  GetProductsAPI,
} from "@/services/Products/Products.services";
import { IProudct } from "@/types/Product/Product.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  product: IProudct;
}

export default function Product(props: IProps) {
  const queryClient = useQueryClient();
  const { edit } = useRedirect().admin.products;

  const { product } = props;
  const { image, title, createdAt, description, gallery, updatedAt, _id } =
    product;

  const { mutate: DeleteProduct } = useMutation({
    mutationFn: DeleteProductByIdAPI,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: [GetProductsAPI.name],
      });
    },
  });

  return (
    <Grid
      gridTemplateColumns={"1fr 1fr"}
      backgroundColor='rgba(0, 0, 0, 0.1)'
      padding={"1em"}
      borderRadius={"1rem"}
      gap={"1rem"}>
      <Grid>
        <img
          src={IMAGE_URL(image.path)}
          width={"100%"}
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid>
        <h2>{title}</h2>
        <p>{description}</p>
      </Grid>
      <Grid
        gridColumn={"-1/1"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={"1rem"}>
        {gallery.map((gall) => (
          <img
            src={IMAGE_URL(image.path)}
            width={"100%"}
            style={{
              borderRadius: "0.5rem",
              objectFit: "cover",
            }}
          />
        ))}
      </Grid>
      <Grid
        gridTemplateColumns={"1fr 1fr"}
        gap={"1rem"}
        marginTop={"auto"}
        gridColumn={"-1/1"}>
        <Button
          type='button'
          variant='warning'
          title='ویرایش'
          icon={<Icon icon='line-md:edit-filled' />}
          onClick={() => {
            edit(_id);
          }}
        />
        <Button
          type='button'
          variant='danger'
          title='حذف'
          icon={<Icon icon='material-symbols:delete-rounded' />}
          onClick={() => {
            ShowQuestion({
              onConfirm() {
                DeleteProduct(_id);
              },
            });
          }}
        />
      </Grid>
    </Grid>
  );
}
