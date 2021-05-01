import { Heading } from "@chakra-ui/layout";
import { Center, Container, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function GrayTextBox(props) {
  return (
    <Center>
      <Container textAlign="left" color="gray.500" {...props} maxWidth="xl">
        {props.children}
      </Container>
    </Center>
  );
}

export default function TermsAndPrivacy() {
  return (
    <VStack>
      <Heading>Terms and Conditions</Heading>
      <GrayTextBox>
        JustDecide is not a business (yet) but free for personal use. We will
        update this page when Premium arrives. If you have any questions, just
        send us a mail at hey@justdecide.io
      </GrayTextBox>
      <Heading>JustDecide Privacy Policy</Heading>
      <GrayTextBox>
        JustDecide is solely build and operated by Bijan Chokoufe Nejad. This
        privacy policy will explain how JustDecide uses the personal data we
        collect from you when you use our website.
      </GrayTextBox>
      <GrayTextBox>
        JustDecide only collects your email on sign-up. This helps to identify
        real, unique users. Furthermore, JustDecide may send you emails with
        results and if you sign up for the Premium Beta, we will inform you of
        the availability via mail. No one else will ever receive your data and
        it won't be used for marketing.
      </GrayTextBox>
      <GrayTextBox>
        JustDecide securely stores your data at{" "}
        <Link
          href="https://supabase.io/"
          isExternal
          _hover={{ color: "red.500" }}
          textColor="gray.900"
        >
          Supabase
        </Link>
        . JustDecide will keep your email until you choose to opt-out of the
        product by requesting data deletion via email to hey@justdecide.io.
      </GrayTextBox>
      <GrayTextBox>
        JustDecide uses cookies in a range of ways to improve your experience on
        our website, especially to: Keeping you signed in and understanding how
        you use our website. You can set your browser not to accept cookies to
        disable this.
      </GrayTextBox>
      <GrayTextBox>
        We use Hotjar in order to better understand our users’ needs and to
        optimize this service and experience. Hotjar is a technology service
        that helps us better understand our users’ experience (e.g. how much
        time they spend on which pages, which links they choose to click, what
        users do and don’t like, etc.) and this enables us to build and maintain
        our service with user feedback. Hotjar uses cookies and other
        technologies to collect data on our users’ behavior and their devices.
        This includes a device's IP address (processed during your session and
        stored in a de-identified form), device screen size, device type (unique
        device identifiers), browser information, geographic location (country
        only), and the preferred language used to display our website. Hotjar
        stores this information on our behalf in a pseudonymized user profile.
        Hotjar is contractually forbidden to sell any of the data collected on
        our behalf. For further details, please see the ‘about Hotjar’ section
        of{" "}
        <Link
          href="https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar"
          isExternal
          _hover={{ color: "red.500" }}
          textColor="gray.900"
        >
          Hotjar’s support site
        </Link>
        .
      </GrayTextBox>
      <GrayTextBox>
        JustDecide does not knowingly collect information from children under
        the age of 13, and children under 13 are prohibited from using our
        Services. If you learn that a child has provided us with personal
        information in violation of this Privacy Policy, you can alert us at
        hey@justdecide.io.
      </GrayTextBox>
      <GrayTextBox>
        The JustDecide website contains links to other websites. Our privacy
        policy applies only to our website, so if you click on a link to another
        website, you should read their privacy policy. JustDecide keeps its
        privacy policy under regular review and places any updates on this web
        page. This privacy policy was last updated on 28th April 2021.
      </GrayTextBox>
      <GrayTextBox>
        If you have any questions about JustDecide’s privacy policy, the data we
        hold on you, or you would like to exercise one of your data protection
        rights, please do not hesitate to contact us via mail to
        hey@justdecide.io.
      </GrayTextBox>
    </VStack>
  );
}
