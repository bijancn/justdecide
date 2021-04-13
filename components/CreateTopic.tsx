import {
  Heading,
  FormControl,
  Input,
  Container,
  Stack,
  Box,
  Center,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { addTopic } from "../lib/TopicsDao";

interface CreateTopicProps {
  userId: string;
}

export default function CreateTopic(props: CreateTopicProps) {
  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{ topic: "" }}
        onSubmit={async (formValue, actions) => {
          const id = await addTopic(props.userId, formValue.topic);
          actions.setSubmitting(false);
          router.push(`/topics/${encodeURIComponent(id)}`);
        }}
      >
        {(props) => (
          <Form>
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
              Let's make a decision on
            </Heading>

            <Field name="topic">
              {({ field, form }) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    id="topic"
                    placeholder="Where to go for Lunch"
                    aria-label={"Your Topic"}
                    size="lg"
                    variant="flushed"
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
    </div>
  );
}
