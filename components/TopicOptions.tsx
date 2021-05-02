import { Auth } from "@supabase/ui";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import { addOptions } from "../lib/OptionsDao";
import { Topic, updateTopic } from "../lib/TopicsDao";
import { DateTime } from "luxon";
import SubmissionCongratsModal from "../components/SubmissionCongratsModal";
import BigHeading from "./basics/BigHeading";
import TextHighlight from "./basics/TextHighlight";
import LoginModal from "./LoginModal";

const initialValues = {
  options: [
    {
      title: "",
    },
    {
      title: "",
    },
  ],
};

const publishTopic = async (userId, topicId, values) => {
  await new Promise((r) => setTimeout(r, 500));
  const result = await addOptions(userId, topicId, values);
  const result2 = await updateTopic(
    topicId,
    DateTime.now().toString(),
    DateTime.now().plus({ hours: 48 }).toString()
  );
};

interface TopicOptionsProps {
  topic: Topic;
}

export default function TopicOptions(props: TopicOptionsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = Auth.useUser();
  useEffect(() => {
    if (props.topic && props.topic.start_at) {
      setIsOpen(true);
    }
  }, [props.topic]);
  return (
    <Container fontSize="2xl" textAlign="center">
      <LoginModal user={user} />
      <SubmissionCongratsModal
        isOpen={isOpen}
        topicId={props.topic.id}
      ></SubmissionCongratsModal>
      <Box>
        <BigHeading>
          <p>Possible options for</p>
          <TextHighlight>{props.topic.title}</TextHighlight>
          <p>are</p>
        </BigHeading>
        <Formik
          initialValues={initialValues}
          onSubmit={(formValue, actions) => {
            publishTopic(user.id, props.topic.id, formValue.options);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <FieldArray name="options">
                {({ insert, remove, push }) => (
                  <div>
                    {props.values.options.length > 0 &&
                      props.values.options.map((friend, index) => (
                        <div className="row" key={index}>
                          <Field name={`options.${index}.title`}>
                            {({ field, form }) => (
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder={
                                    index == 0
                                      ? "First option"
                                      : index == 1
                                      ? "Second option"
                                      : "Optional extra options"
                                  }
                                  aria-label={"Your Option"}
                                  size={{ base: "22px", md: "38px" }}
                                  variant="flushed"
                                  pt={5}
                                  width={{ base: "100%", sm: "85%", md: "75%" }}
                                />
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </div>
                      ))}
                    {props.values.options.every(
                      (value, index) => value.title.length > 0
                    ) &&
                      push({
                        title: "",
                      })}
                  </div>
                )}
              </FieldArray>
              <Center>
                <Button
                  mt={4}
                  colorScheme="red"
                  isLoading={props.isSubmitting}
                  type="submit"
                  onClick={(_) => setIsOpen(true)}
                >
                  Publish
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
