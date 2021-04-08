import { FormEvent, ChangeEvent, useState } from "react";
import {
  Circle,
  Heading,
  FormControl,
  useColorModeValue,
  Input,
  Container,
  Stack,
  Box,
  Center,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { supabase } from "../lib/initSupabase";
import { Formik, Field, Form, FormikHelpers } from "formik";

function CreateVote({ user }) {
  const fetchTodos = async () => {
    let { data: topics, error } = await supabase.from("topics").select("*");
    if (error) console.log("error", error);
    else console.log("success", topics);
  };
  const addTodo = async (topicText) => {
    let task = topicText.trim();
    if (task.length) {
      let { data: todo, error } = await supabase
        .from("topics")
        .insert({ description: task, author: user.id })
        .single();
      if (error) console.log("error", error);
      else console.log("success!");
    } else {
      console.log("empty");
    }
  };
  fetchTodos();
  return (
    <div>
      <Container maxW={"3xl"}>
        <Stack
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Formik
            initialValues={{ topic: "" }}
            onSubmit={(formValue, actions) => {
              setTimeout(() => {
                console.log(formValue);
                addTodo(formValue.topic);
                // alert(JSON.stringify(formValue, null, 2));
                actions.setSubmitting(false);
              }, 100);
            }}
          >
            {(props) => (
              <Form>
                <Box boxShadow="" p="6" rounded="md" bg="white">
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
                </Box>
                <Box>
                  <Button
                    mt={4}
                    colorScheme="red"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Add Options
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
    </div>
  );
}

export default CreateVote;
