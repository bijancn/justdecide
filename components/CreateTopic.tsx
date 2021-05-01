import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { addTopic } from "../lib/TopicsDao";
import BigHeading from "./basics/BigHeading";
import LoginModal from "./LoginModal";

export default function CreateTopic() {
  const router = useRouter();
  const { user } = Auth.useUser();
  return (
    <Container fontSize="2xl" textAlign="center">
      <LoginModal user={user} />
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={async (formValue, actions) => {
          const topic = await addTopic(user.id, formValue.topic);
          actions.setSubmitting(false);
          router.push(`/decisions/${encodeURIComponent(topic.id)}`);
        }}
      >
        {(props) => (
          <Form>
            <BigHeading>Let's make a decision on</BigHeading>

            <Field name="topic">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="topic"
                    placeholder="Where to go for Lunch"
                    aria-label={"Your Topic"}
                    size={{ base: "22px", md: "38px" }}
                    variant="flushed"
                    colorScheme="red"
                    pt={5}
                    width={{ base: "100%", sm: "85%", md: "75%" }}
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Center py={10}>
              <Button
                colorScheme="red"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Add Options
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
