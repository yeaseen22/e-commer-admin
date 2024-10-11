
// import React, { useState } from 'react';
// import CustomInput from '../Components/CustomInput';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// const { Dragger } = Upload;

// const props = {
//     name: 'file',
//     multiple: true,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//         const { status } = info.file;
//         if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     onDrop(e) {
//         console.log('Dropped files', e.dataTransfer.files);
//     },
// };


// const AddBlog = () => {
//     const [desc, setDesc] = useState()
//     const handleDesc = (e) => {
//         setDesc(e)
//     }
//     return (
//         <div>
//             <h4 className="mb-4">Add Blog</h4>
//             <div className="">
//                 <form action="">
//                     <Dragger {...props}>
//                         <p className="ant-upload-drag-icon">
//                             <InboxOutlined />
//                         </p>
//                         <p className="ant-upload-text">Click or drag file to this area to upload</p>
//                         <p className="ant-upload-hint">
//                             Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//                             banned files.
//                         </p>
//                     </Dragger>
//                     <div className='mt-4'>
//                         <CustomInput type='text' label='Enter Blog Title' />
//                     </div>
//                     <select className='form-control py-3 mb-2' name="" id="">
//                         <option value="">Select Blog Category</option>
//                     </select>
//                     <ReactQuill theme="snow" value={desc} onChange={(e) => handleDesc(e)} />
//                     <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Blog</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AddBlog

// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  createBlogs,
  getABlog,
  resetState,
  updateABlog,
} from "../features/blogs/blogSlice";
import { getCategories } from "../features/bcategory/bcategorySlice";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  category: yup.string().required("Category is Required"),
});
const Addblog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];
  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const blogState = useSelector((state) => state.blogs);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    blogName,
    blogDesc,
    blogCategory,
    blogImages,
    updatedBlog,
  } = blogState;
  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImages);
    } else {
      dispatch(resetState());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getBlogId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfullly!");
    }
    if (isSuccess && updatedBlog) {
      toast.success("Blog Updated Successfullly!");
      navigate("/admin/blog-list");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  console.log(img);
  useEffect(() => {
    formik.values.images = img;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogImages]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDesc || "",
      category: blogCategory || "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };
        dispatch(updateABlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlogs(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">
        {getBlogId !== undefined ? "Edit" : "Add"} Blog
      </h3>

      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
            />
          </div>
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3  mt-3"
            id=""
          >
            <option value="">Select Blog Category</option>
            {bCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            className="mt-3"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag and drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getBlogId !== undefined ? "Edit" : "Add"} Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
