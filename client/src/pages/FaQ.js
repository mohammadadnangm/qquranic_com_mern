import React from "react";
import "./FaQs.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FaQ = () => {
  return (
    <>
      <Navbar />

      <section className="common-section our-courses our-courses-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-courses-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">FaQs</h3>
              <h1 className="main-heading">A Brief Summary</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus reprehenderit molestias impedit eius voluptates
                voluptatum? Obcaecati assumenda blanditiis vel, est at dolores
                consequuntur dicta fugiat pariatur eos iusto, error
                perspiciatis.
              </p>

              <br />
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/hero1.png" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* there is start students and parent question.............................................. */}
        <h1 className="mx-4">For Students and Parents:</h1>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How long will it take to learn tajweed/Arabic?
            </p>
            <p className="QuestionAnswer">
              Depending on the intensity of the studies (how many classes you
              take), it will take adults 8 to 12 weeks for a Tajweed course. For
              Arabic, a course can last anywhere from 6 to 12 months. For
              children, it depends on their age, aptitude and the support given
              by parents.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              What is the duration of each class?
            </p>
            <p className="QuestionAnswer">
              You and your tutor can decide how long each session should last.
              The Virtual Classroom logs the time you spend with your tutor for
              billing purposes, so there is no restriction on session length.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Can we choose session timings at my own convenience?
            </p>
            <p className="QuestionAnswer">
              Yes, you can. Each tutor’s schedule is shown on their profile page
              and you can select any free time slot for your lesson.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Can we meet our teacher outside the classroom when needed?
            </p>
            <p className="QuestionAnswer">
              All learning should happen inside Qutor’s Virtual Classroom. Our
              tutors do no teach outside Qutor. You can ask for their phone
              number to make scheduling easier, but the learning should happen
              in our Classroom which we have designed for the specific purpose
              of learning Quran.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              I have never taken an online course before; will i be able to cope
              with this?
            </p>
            <p className="QuestionAnswer">
              Allah (swt) makes it easier when we strive to follow His path and
              learn the Quran. The Classroom sessions are one-on-one and your
              tutor will teach you at a pace that is comfortable for you
              inshaAllah.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Do we have any course meterials?
            </p>
            <p className="QuestionAnswer">
              A digital Quran, tajweed book and other tools like whiteboard and
              file uploading are present in the Virtual Classroom. Your tutor
              will upload any materials you need into the classroom and will
              organise your course materials for you.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Do I need to know how to use a computer?
            </p>
            <p className="QuestionAnswer">
              You need a basic knowledge of how to use a computer. You should be
              able to open a browser and navigate a website. Children may
              require assistance from a parent to open up the classroom. Once
              inside, the Classroom itself is intuitive.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How can I start learing on QQuranic?
            </p>
            <p className="QuestionAnswer">
              You need to sign up on Qutor by visiting this link
              https://qquranic.com/signup and entering your basic details.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">How do I find a tutor?</p>
            <p className="QuestionAnswer">
              You can find tutors by clicking the ‘Find Tutors’ link (
              https://qquranic.com/hire-quran-tutors ) and narrowing down your
              search results by location, skills, ratings etc.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Before hiring a tutor, can I contact them so that i can select the
              most suitable one for my child?
            </p>
            <p className="QuestionAnswer">
              You can browse through the Tutor profiles, check their ratings,
              reviews and hourly rates and also message them to ask questions
              before setting up a Video call. Please note that the student has
              to purchase one of the Plans before they can use the Virtual
              Classroom. Plans can be purchased from here:
              https://qquranic.com/pricing
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Do you have female tutors as well as male tutors on QQuranic?
            </p>
            <p className="QuestionAnswer">
              Yes, we have Qariahs from all over the world who teach students.
              You can filter tutor profiles based on gender by selecting the
              appropriate check box from the filter.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Do I need a physical copy of the Quran when I learn though
              QQuranic?
            </p>
            <p className="QuestionAnswer">
              Qutor has an in-built Quran in the classroom, which is available
              when a lesson is in progress. The Surah you are learning/reciting
              can be selected from the side bar. The tutor can highlight the
              passage/line he/she is reciting on his screen using a mouse and it
              will get highlighted on your screen so you can follow where your
              tutor is pointing.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How can parents check what the tutor is teaching?
            </p>
            <p className="QuestionAnswer">
              If you have selected a plan which includes the Parental Watch
              option, Qutor takes 30-second video snippets at random times
              during every 10-minute interval and saves the snippet for later
              viewing by parents. Parents can view the video logs after every
              session.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Is there a way to rate and review tutors?
            </p>
            <p className="QuestionAnswer">
              Yes, once a contract ends, you will be asked to give a star rating
              for the tutor and write a review.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">How do I end a contract?</p>
            <p className="QuestionAnswer">
              In your current tutors list on your Dashboard, you will find the
              “End contract” link in red below the tutor’s name. Clicking this
              will end the contract and notify the tutor..
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Do I have to give a notice period if I do not want to continue
              with a tutor?
            </p>
            <p className="QuestionAnswer">
              Qutor does not require this, but it would be helpful to the tutor
              if you provided some notice so they could find other students to
              teach in the time being.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              What if the tutor misses the lesson or comes late?
            </p>
            <p className="QuestionAnswer">
              It would reflect poorly on a tutor’s rating and review if they
              were consistently late to lessons. Please do speak to your tutor
              to find out if they had a legitimate reason not to make it to a
              scheduled lesson.
            </p>
          </Link>
        </div>
        {/* there is start Tutors question.............................................. */}
        <h1 className="mx-4 MainHeading">For Tutors:</h1>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How can I start teaching on QQuranic?
            </p>
            <p className="QuestionAnswer">
              You need to sign up here https://qquranic.com/signup. You can
              create an account by providing a few basic details. Once signed
              up, you can create a profile and choose the subjects you wish to
              teach. Remember to add your qualifications in your profile, which
              will improve your chances of being contacted by students when they
              search tutor profiles.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              What do I find and connect with students?
            </p>
            <p className="QuestionAnswer">
              To find students, you can click on the ‘Find Students’ link (
              https://qquranic.com/find-quran-students ) and filter the list of
              students based on what they want to learn and what you would like
              to teach. You can message students directly to offer them your
              services. If you think you are a good match, you can set up your
              first lesson by asking them to click the “Hire” button on your
              profile page.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Can I find students from QQuranic and teach them on skype?
            </p>
            <p className="QuestionAnswer">
              Qutor is a place for you to find students. We provide this
              facility so you can connect with students and teach them using the
              Qutor classroom environment for one-on-one tutoring. We ask tutors
              to read our terms and conditions which specify that you must teach
              students you find on Qutor using Qutor’s classroom.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Where can I see who has hired me for a job?
            </p>
            <p className="QuestionAnswer">
              When a student hires you, a notification is shown on your
              dashboard. You must be logged in to view this. You can see the
              hire request in the “Received Invites” section on the dashboard
              and can accept or reject the offer from there. We also send you an
              email when you receive an invite but since emails can sometimes
              end up in Junk folders, we encourage you to check your Qutor
              dashboard by logging in regularly.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I show my credibility to students?
            </p>
            <p className="QuestionAnswer">
              Your best chance of getting hired is if you create a great
              profile. Add your relevant employment details, certifications and
              qualifications and build a glowing profile, which makes you stand
              out. Tip: Always ask your students to rate and review you after
              your contract ends. This helps to build your credibility with
              future students.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I apear available or unavailable to a student?
            </p>
            <p className="QuestionAnswer">
              Students will see you as available when you are logged in to
              Qutor. If you are logged out of the site, your status will become
              unavailable. Also, if you are in a call with another student, you
              will appear unavailable to other students if they wish to start a
              call with you.
            </p>
          </Link>
        </div>
        {/* there is start ganeral question.............................................. */}
        <h1 className="mx-4 MainHeading">For Tutors:</h1>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How can I start teaching on QQuranic?
            </p>
            <p className="QuestionAnswer">
              You need to sign up here https://qquranic.com/signup. You can
              create an account by providing a few basic details. Once signed
              up, you can create a profile and choose the subjects you wish to
              teach. Remember to add your qualifications in your profile, which
              will improve your chances of being contacted by students when they
              search tutor profiles.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              What do I find and connect with students?
            </p>
            <p className="QuestionAnswer">
              To find students, you can click on the ‘Find Students’ link (
              https://qquranic.com/find-quran-students ) and filter the list of
              students based on what they want to learn and what you would like
              to teach. You can message students directly to offer them your
              services. If you think you are a good match, you can set up your
              first lesson by asking them to click the “Hire” button on your
              profile page.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Can I find students from QQuranic and teach them on skype?
            </p>
            <p className="QuestionAnswer">
              Qutor is a place for you to find students. We provide this
              facility so you can connect with students and teach them using the
              Qutor classroom environment for one-on-one tutoring. We ask tutors
              to read our terms and conditions which specify that you must teach
              students you find on Qutor using Qutor’s classroom.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Where can I see who has hired me for a job?
            </p>
            <p className="QuestionAnswer">
              When a student hires you, a notification is shown on your
              dashboard. You must be logged in to view this. You can see the
              hire request in the “Received Invites” section on the dashboard
              and can accept or reject the offer from there. We also send you an
              email when you receive an invite but since emails can sometimes
              end up in Junk folders, we encourage you to check your Qutor
              dashboard by logging in regularly.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I show my credibility to students?
            </p>
            <p className="QuestionAnswer">
              Your best chance of getting hired is if you create a great
              profile. Add your relevant employment details, certifications and
              qualifications and build a glowing profile, which makes you stand
              out. Tip: Always ask your students to rate and review you after
              your contract ends. This helps to build your credibility with
              future students.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I apear available or unavailable to a student?
            </p>
            <p className="QuestionAnswer">
              Students will see you as available when you are logged in to
              Qutor. If you are logged out of the site, your status will become
              unavailable. Also, if you are in a call with another student, you
              will appear unavailable to other students if they wish to start a
              call with you.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I show my credibility to students?
            </p>
            <p className="QuestionAnswer">
              Your best chance of getting hired is if you create a great
              profile. Add your relevant employment details, certifications and
              qualifications and build a glowing profile, which makes you stand
              out. Tip: Always ask your students to rate and review you after
              your contract ends. This helps to build your credibility with
              future students.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I apear available or unavailable to a student?
            </p>
            <p className="QuestionAnswer">
              Students will see you as available when you are logged in to
              Qutor. If you are logged out of the site, your status will become
              unavailable. Also, if you are in a call with another student, you
              will appear unavailable to other students if they wish to start a
              call with you.
            </p>
          </Link>
        </div>
        {/* there is start Billing question.............................................. */}
        <h1 className="mx-4 MainHeading">Billing:</h1>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How can I start teaching on QQuranic?
            </p>
            <p className="QuestionAnswer">
              You need to sign up here https://qquranic.com/signup. You can
              create an account by providing a few basic details. Once signed
              up, you can create a profile and choose the subjects you wish to
              teach. Remember to add your qualifications in your profile, which
              will improve your chances of being contacted by students when they
              search tutor profiles.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              What do I find and connect with students?
            </p>
            <p className="QuestionAnswer">
              To find students, you can click on the ‘Find Students’ link (
              https://qquranic.com/find-quran-students ) and filter the list of
              students based on what they want to learn and what you would like
              to teach. You can message students directly to offer them your
              services. If you think you are a good match, you can set up your
              first lesson by asking them to click the “Hire” button on your
              profile page.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Can I find students from QQuranic and teach them on skype?
            </p>
            <p className="QuestionAnswer">
              Qutor is a place for you to find students. We provide this
              facility so you can connect with students and teach them using the
              Qutor classroom environment for one-on-one tutoring. We ask tutors
              to read our terms and conditions which specify that you must teach
              students you find on Qutor using Qutor’s classroom.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              Where can I see who has hired me for a job?
            </p>
            <p className="QuestionAnswer">
              When a student hires you, a notification is shown on your
              dashboard. You must be logged in to view this. You can see the
              hire request in the “Received Invites” section on the dashboard
              and can accept or reject the offer from there. We also send you an
              email when you receive an invite but since emails can sometimes
              end up in Junk folders, we encourage you to check your Qutor
              dashboard by logging in regularly.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I show my credibility to students?
            </p>
            <p className="QuestionAnswer">
              Your best chance of getting hired is if you create a great
              profile. Add your relevant employment details, certifications and
              qualifications and build a glowing profile, which makes you stand
              out. Tip: Always ask your students to rate and review you after
              your contract ends. This helps to build your credibility with
              future students.
            </p>
          </Link>
        </div>
        <div className="FaqDiv">
          <Link to="#" className="QuestionButton">
            <p className="QuestionPeragraph">
              How do I apear available or unavailable to a student?
            </p>
            <p className="QuestionAnswer">
              Students will see you as available when you are logged in to
              Qutor. If you are logged out of the site, your status will become
              unavailable. Also, if you are in a call with another student, you
              will appear unavailable to other students if they wish to start a
              call with you.
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaQ;
