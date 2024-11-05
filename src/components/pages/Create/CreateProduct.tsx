"use client";
import scss from "./CreateProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadFileMutation } from "@/redux/api/upload";
import { usePostCreateMutation } from "@/redux/api/products";

const CreateProduct = () => {
  const [postCreateQuery] = usePostCreateMutation();
  const { register, handleSubmit } = useForm<PostCreatereq>();
  const [uploadFileMutation] = useUploadFileMutation();

  const onSubmit: SubmitHandler<PostCreatereq> = async (data) => {
    const selectedFile = data.image![0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    const { data: media } = await uploadFileMutation(formData);
    const userData: PostCreatereq = {
      category: data.category,
      description: data.description,
      image: String(media?.url),
      price: data.price,
      title: data.title,
    };
    const { data: post } = await postCreateQuery(userData);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<PostCreatereq>= ~ post:",
      post
    );
  };
  return (
    <section className={scss.Create}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("image", { required: true })} />
            <input
              type="text"
              placeholder="Product Name"
              {...register("title", { required: true })}
            />
            <input
              type="text"
              placeholder="Product Description"
              {...register("description", { required: true })}
            />{" "}
            <select {...register("category", { required: true })}>
              <option value="electronics">electronics</option>
              <option value="jewelry">jewelry</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
            <input
              type="text"
              placeholder="Product Price"
              {...register("price", { required: true })}
            />{" "}
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
