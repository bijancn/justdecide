import { useRouter } from "next/router";
import { supabase } from "../../lib/initSupabase";
import {
  Heading,
  FormControl,
  Input,
  Center,
  Container,
  Stack,
  Box,
  FormErrorMessage,
  Button,
  Text,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import React, { useState, useEffect } from "react";

const initialValues = {
  options: [
    {
      description: "",
    },
    {
      description: "",
    },
  ],
};

const Topic = (user) => {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState({});
  useEffect(() => {
    if (!router.isReady) return;
    fetchTopic();
  }, [router.isReady]);
  const fetchTopic = async () => {
    let { data: topics, error } = await supabase
      .from("topics")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.log("error", error);
    else setTopic(topics);
  };
  const sendOptions = async (user, values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Box boxShadow="" p="6" rounded="md" bg="white">
        <Heading fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
          {/* {topic.description} */}
          <p>Possible options for</p>
          <Text color="#e53e3e">{topic.description}</Text>
          <p>are</p>
        </Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={(formValue, actions) => {
            sendOptions(user, formValue.options);
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
                          <Field name={`options.${index}.description`}>
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
                      (value, index) => value.description.length > 0
                    ) &&
                      push({
                        description: "",
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
};

export default Topic;
