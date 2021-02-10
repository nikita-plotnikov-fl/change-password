import * as Yup from "yup";

export const changePasswordValdationSchema = Yup.object({
  newPassword: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("New Password is required")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.newPassword === value;
    }),
  masterPassword: Yup.string()
    .required("Master Password is required")
    .test(
      "passwords-match",
      "Master and new password must not be the same",
      function (value) {
        return this.parent.newPassword !== value;
      }
    )
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number"
    ),
});
