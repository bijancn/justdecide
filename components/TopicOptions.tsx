import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import { addOptions } from "../lib/OptionsDao";
import { Topic, updateTopic } from "../lib/TopicsDao";
import React from "react";
import { DateTime } from "luxon";
import SubmissionCongratsModal from "../components/SubmissionCongratsModal";

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
  userId: string;
}

export default function TopicOptions(props: TopicOptionsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SubmissionCongratsModal
        isOpen={isOpen}
        topicId={props.topic.id}
      ></SubmissionCongratsModal>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Box boxShadow="" p="6" rounded="md" bg="white">
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>
          <p>Possible options for</p>
          <Text color="#e53e3e">{props.topic.title}</Text>
          <p>are</p>
        </Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={(formValue, actions) => {
            publishTopic(props.userId, props.topic.id, formValue.options);
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
                                  size="lg"
                                  variant="flushed"
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
                  onClick={onOpen}
                >
                  Publish
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
