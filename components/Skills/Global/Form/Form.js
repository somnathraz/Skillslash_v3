import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import { BsArrowRightCircleFill } from "react-icons/bs";

// import RedirectionZoom from "../redirectionZoom/RedirectionZoom";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  syllabus,
  redirectDs,
  redirectFs,
  redirectDa,
  redirectDM,
  redirectgrowth,
  redirectsocialSeo,
  redirectPerforSocia,
  redirectPSeo,
  redirectCaseS,
  redirectCertificate,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: value,
    workExperience:"",
    looking:"",
    url: router.asPath,
  });

  useEffect(() => {
    setQuery({ ...query, phone: value });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint;
  if (redirectDs) {
    endPoint = "https://getform.io/f/f52ff3a0-cf37-4e7e-9bb7-27786de78fd7";
  }
  if (redirectDa) {
    endPoint = "https://getform.io/f/e0b3b3f6-1515-4536-aa9c-36af5d4196cd";
  }
  if (redirectFs) {
    endPoint = "https://getform.io/f/e11a9831-3aef-43af-9b1a-93b36c58f7fb";
  }
  if(redirectDM){
    endPoint="https://getform.io/f/kaz127eJ";
  }
  if(redirectgrowth || redirectsocialSeo || redirectPerforSocia || redirectPSeo || redirectCaseS || redirectCertificate){
    endPoint="https://getform.io/f/kaz127eJ";
  }



  // Form Submit function
  const formSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        looking:"",
        dateTime: "",
        url: "",
        EventTitle: "",
      })
    );
    setLoading(false);
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }
    if (redirectDs) {
      router.push("/Thankyou/data-science");
    }
    if (redirectFs) {
      router.push("/Thankyou/dsa");
    }
    if (redirectDa) {
      router.push("/Thankyou/business-analytics");
    }
    if (redirectDM){
      router.push("/Thankyou/digital-marketing");
    }
    if (redirectgrowth){
      router.push("/Thankyou/growth-marketing");
    }
    if (redirectsocialSeo){
      router.push("/Thankyou/seo-social-media")
    }
    if(redirectPerforSocia){
      router.push("/Thankyou/performance-and-social-media")
    }
    if (redirectPSeo){
      router.push("/Thankyou/performance-and-seo")
    }
    if (redirectCaseS){
      router.push("/Thankyou/case-study")
    }
    if (redirectCertificate){
      router.push("/Thankyou/digital-marketing-certificates")
    }
  };
  let btnText = "Apply Now";

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper} style={{ width: "80%" }}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Full Name*</legend>
            <input
              type="text"
              name="name"
              className={popup ? styles.NameInputs : styles.NameInput}
              style={syllabus ? { color: "white" } : { color: "black" }}
              required
              value={query.name}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div className={styles.formWrapper} style={{ width: "80%" }}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Email*</legend>
            <input
              type="email"
              name="email"
              required
              style={syllabus ? { color: "white" } : { color: "black" }}
              className={popup ? styles.EmailInputs : styles.EmailInput}
              value={query.email}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div className={styles.formWrapper} style={{ width: "80%" }}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Phone Number*</legend>
            {/* <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              required
              className={popup ? styles.EmailInputs : styles.EmailInput}
              maxLength="10"
              minLength="10"
              value={query.phone}
              onChange={handleParam()}
            /> */}
            <PhoneInput
              style={
                popup
                  ? {
                      height: "35px",
                      borderRadius: "8px",
                      color: "#646464",
                      padding: "10px",
                    }
                  : {
                      border: "0",
                      height: "35px",

                      borderRadius: "3px",
                    }
              }
              maxLength="12"
              minLength="12"
              international={false}
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              className={
                popup
                  ? styles.Phones
                  : syllabus
                  ? styles.syllabusPhone
                  : styles.Phone
              }
              value={value}
              required
              onChange={setValue}
            />
          </fieldset>
        </div>
        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Work Experience*</legend>
            <select
              name="workExperience"
              required
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option className={styles.option} value="">
                Select Your Work Experience*
              </option>

              <option value="College Students">College Students</option>

              <option value="Fresher ( less than 1 year)">
                Fresher ( less than 1 year)
              </option>
              <option value="1 to 3 year">1 to 3 year</option>
              <option value="3 to 7 year">3 to 7 year</option>
              <option value="7 to 12 year">7 to 12 year</option>
              <option value="12+ year">12+ year</option>
            </select>
          </fieldset>
        </div>
        <div className={styles.formWrapper} style={{ width: "80%" }}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Are you looking for Digital Marketing Course ?</legend>
            <input
              type="text"
              name="looking"
              className={popup ? styles.NameInputs : styles.NameInput}
              style={syllabus ? { color: "white" } : { color: "black" }}
              required
              value={query.looking}
              onChange={handleParam()}
            />
          </fieldset>
        </div>

        <input type="hidden" id="url" name="url" value={router.asPath}></input>

        <p
          className={syllabus ? styles.FormTextS : styles.FormText}
          style={{ fontSize: "10px" }}
        >
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        {loading ? (
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        ) : (
          <button
            type="submit"
            className={syllabus ? styles.buttonS : styles.button}
          >
            {downloadBrochure ? "Download Now" : btnText}{" "}
            <BsArrowRightCircleFill />
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
