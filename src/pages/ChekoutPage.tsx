import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Heading, Text, Checkbox, Button } from "@radix-ui/themes";
import FormInput from "../components/FormInput";

interface BillingFormProps {
  civility: "Mr" | "Mme" | "Mlle";
  firstName: string;
  lastName: string;
  companyName: string;
  street: string;
  apartment: string;
  city: string;
  country: string;
  postalCode: string;
  email: string;
  phone: string;
}

interface ShippingFormProps extends BillingFormProps {}

interface CheckoutFormProps {
  billing: BillingFormProps;
  shipping: ShippingFormProps;
}

const initialValues: CheckoutFormProps = {
  billing: {
    civility: "Mr",
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    email: "",
    phone: "",
  },
  shipping: {
    civility: "Mr",
    firstName: "",
    lastName: "",
    companyName: "",
    street: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    email: "",
    phone: "",
  },
};

const validationSchema = Yup.object().shape({
  billing: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Invalid phone number").required("Required"),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
  }),
  shipping: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Invalid phone number").required("Required"),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
  }),
});

const CheckoutForm = () => {
  return (
    <div className="max-w-4xl my-8 mx-auto p-8 bg-white shadow-md rounded-lg">
      <Heading as="h2" className="text-xl font-bold mb-6">
        Enter Billing & Shipping Details
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, values, setValues }) => (
          <Form onSubmit={handleSubmit} className="space-y-6">
            {/* Billing Details */}
            <div>
              <Heading as="h3" className="text-lg font-semibold mb-4">
                Billing Information
              </Heading>
              <BillingForm />
            </div>

            {/* Shipping Details */}
            <div>
              <Heading as="h3" className="text-lg font-semibold mb-4">
                Shipping Information
              </Heading>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setValues({ ...values, shipping: values.billing });
                    }
                  }}
                />
                <Text>Same as Billing Address</Text>
              </div>
              <ShippingForm />
            </div>

            <Button type='submit' mt={'2'} color="gray" variant="solid" highContrast>
                Place Order
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const BillingForm = () => (
  <div className="grid grid-cols-2 gap-4">
    <FormInput label="First Name" htmlFor="billing.firstName" id="billing.firstName" type="text" />
    <FormInput label="Last Name" htmlFor="billing.lastName" id="billing.lastName" type="text" />
    <FormInput label="Company Name" htmlFor="billing.companyName" id="billing.companyName" type="text" />
    <FormInput label="Street Address" htmlFor="billing.street" id="billing.street" type="text" />
    <FormInput label="Apartment" htmlFor="billing.apartment" id="billing.apartment" type="text" />
    <FormInput label="City" htmlFor="billing.city" id="billing.city" type="text" />
    <FormInput label="Country" htmlFor="billing.country" id="billing.country" type="text" />
    <FormInput label="Postal Code" htmlFor="billing.postalCode" id="billing.postalCode" type="text" />
    <FormInput label="Email" htmlFor="billing.email" id="billing.email" type="email" />
    <FormInput label="Phone" htmlFor="billing.phone" id="billing.phone" type="tel" />
  </div>
);

const ShippingForm = () => (
  <div className="grid grid-cols-2 gap-4">
    <FormInput label="First Name" htmlFor="shipping.firstName" id="shipping.firstName" type="text" />
    <FormInput label="Last Name" htmlFor="shipping.lastName" id="shipping.lastName" type="text" />
    <FormInput label="Company Name" htmlFor="shipping.companyName" id="shipping.companyName" type="text" />
    <FormInput label="Street Address" htmlFor="shipping.street" id="shipping.street" type="text" />
    <FormInput label="Apartment" htmlFor="shipping.apartment" id="shipping.apartment" type="text" />
    <FormInput label="City" htmlFor="shipping.city" id="shipping.city" type="text" />
    <FormInput label="Country" htmlFor="shipping.country" id="shipping.country" type="text" />
    <FormInput label="Postal Code" htmlFor="shipping.postalCode" id="shipping.postalCode" type="text" />
    <FormInput label="Email" htmlFor="shipping.email" id="shipping.email" type="email" />
    <FormInput label="Phone" htmlFor="shipping.phone" id="shipping.phone" type="tel" />
  </div>
);

export default CheckoutForm;
