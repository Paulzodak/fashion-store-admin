import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import userImage from "../../assets/navbar/user.png";
import Image from "next/image";
import { FaPencilAlt as PencilIcon } from "react-icons/fa";
import { FiCopy as CopyIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import useAutoCapitalize from "@/hooks/useAutoCapitalize";
import { useState } from "react";
import { Toast } from "@/utils/global";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { ClipLoader } from "react-spinners";
import { getUser, setUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
export interface IIndexProps {}

export default function Settings(props: any) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://www.profilelink.com"
  );
  const username = useAutoCapitalize(user.fullname);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl);
    Toast.fire({
      icon: "success",
      title: "Copied",
    });
  };
  const handleFileChange = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fashion-store-image");
    formData.append("cloud_name", "dxs8cpeae");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dxs8cpeae/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        axios
          .post(`${BASEURL}/user/updateProfileImage`, {
            imageUrl: data.url,
            email: user.email,
          })
          .then((res) => {
            // dispatch(getUser(user.email));
            console.log(res);
            dispatch(setUser(res.data.user));
            Toast.fire({
              icon: "success",
              title: "Profile picture updated!",
            });
            setLoading(false);
          })
          .catch((err) => {
            Toast.fire({
              icon: "error",
              title: "Unknown error",
            });
            setLoading(false);
          });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Unknown error",
        });
        setLoading(false);
      });
  };
  return (
    <Layout>
      <section className=" mx-auto my-10 w-[90%] font-inter">
        <div className="text-sm">
          <a href="" className="text-textGrey">
            Home
          </a>{" "}
          / <a href="">Settings</a>
        </div>

        <div className="grid grid-cols-[19rem] md:grid-cols-[19rem_67%]  mt-4 md:justify-between justify-around ">
          {/* -------------------- */}
          <div className="">
            <h1 className="text-4xl font-bold ">Settings</h1>
            <div className="border-2 border-borderGrey rounded-md mt-6 mb-2 pb-4">
              <div className="relative h-[10rem] w-[10rem] mx-auto mt-2">
                <Image
                  src={user.imageUrl ? user.imageUrl : userImage}
                  fill
                  alt="user"
                  className="border-2 border-[white] rounded-full shadow-sm"
                />

                <button className="border  w-[2.5rem] h-[2.5rem] bg-btnGreen rounded-full py-[9px] px-[10px] absolute top-[7.7rem] left-[6.7rem] ">
                  {loading ? (
                    <ClipLoader
                      color="white"
                      // loading={loading}
                      className="relative"
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <PencilIcon
                      className=" relative cursor-pointer"
                      size="1.2rem"
                      color="white"
                    />
                  )}
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="border w-full h-full absolute top-0 left-0 rounded-full z-0 opacity-0 cursor-pointer"
                  />
                </button>
              </div>
              <h1 className="text-center text-xl text-btnGreen font-bold mt-4 ">
                {username}
              </h1>
              <p className="text-center text-sm">Professional title</p>
              <p className="text-textGrey text-center text-xs m-4">
                Incididunt dolore ut aliquip culpa id cupidatat mollit dolore
                sint esse non c
              </p>
              <hr className="my-4 mx-4" />
              <h2 className="mx-4 font-bold text-sm">Profile link</h2>
              <div className="relative">
                <input
                  value={profileUrl}
                  className="bg-bgGrey w-[87%] h-8 mx-4 mt-2 text-sm pl-4"
                />
                <CopyIcon
                  onClick={copyToClipboard}
                  size="1.2rem"
                  className="absolute top-[15px] left-[15rem] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- */}
          <div className="">
            <h1 className="text-4xl font-bold ">Tools</h1>
            <div className="border-2 border-borderGrey rounded-md mt-6"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
