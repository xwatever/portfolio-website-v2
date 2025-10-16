<template>
  <div id="professional-background">
    <div
      class="relative pb-container"
      @click="isHighlighted = !isHighlighted"
      :class="[
        'p-4 rounded-lg cursor-pointer transition-all duration-300',
        isHighlighted ? ' scale-106' : '',
      ]"
    >
      <span
        v-if="isHighlighted"
        class="absolute inset-[-3.5px] animate-border-line pointer-events-none"
      ></span>

      <div class="pb-left">
        <div class="pb-tabs">
          <button class="pb-button">Work Experience</button>
          <button class="pb-button">Project Experience</button>
          <button class="pb-button">Education</button>
        </div>
        <div class="pb-details">
          <div id="work-experience">
            <ul>
              <li class="experience">
                Department of Population and Civil Registration - Back Office
                Employee
              </li>
              <li class="date">September 2022 - Present</li>
              <li class="details">
                As one of Social Media Officer, Assisted 150 to 250 users per
                week in navigating the department’s apps, resolving inquiries,
                and ensuring successful submission of citizenship-related
                documents.
              </li>
              <li class="details">
                Identified and reported recurring user challenges, resulting in
                the implementation of documentation or guides that reduced
                app-related complaints by 67%.
              </li>
              <li class="details">
                Created user-fiendly guides and step-by-step instructions for
                app functionality, improving user satisfaction as measured in
                our public satisfaction survey.
              </li>
            </ul>
            <ul>
              <li class="experience">
                Islamic University of Riau - Laboratory Assistant
              </li>
              <li class="date">September 2019 - July 2021</li>
              <li class="details">
                Teaching juniors on practicum lessons: C++, DBMS, MySQL, Python,
                Matlab, PHP. Guided and mentored up to 150 students per
                semester, ensuring their understanding of programming concepts
                and practical implementation of programming basics.
              </li>
              <li class="details">
                Debugged and resolved coding issues from students, achieving an
                average resolution time of 1 to 2 minutes per issue, making sure
                that i can proceed to teach one to two more source codes by the
                length of time given for my class.
              </li>
              <li class="details">
                Designed teaching materials and exercises used for my classes
                and for few fellow lecturer assitant, receiving positive
                feedback from students, associates, and lecturers.
              </li>
            </ul>
          </div>
          <div id="project-experience"></div>
          <div id="education">
            <ul>
              <li class="experience">
                Islamic University of Riau, Engineering Faculty | Bachelor of
                Informatics Engineering
              </li>
              <li class="location">Pekanbaru City, Riau Province, Indonesia</li>
              <li class="date">September 2017 - June 2024</li>
              <li class="details"></li>
            </ul>
            <ul>
              <li class="experience">
                Public Vocational High School 2 Pekanbaru | Graduate of Computer
                Software Engineering Major
              </li>
              <li class="location">Pekanbaru City, Riau Province, Indonesia</li>
              <li class="date">July 2014 - June 2017</li>
              <li class="details"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pb-right">
        <span class="pb-work-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./../../assets/css/home-professional-background.css";

export default {
  data: function () {
    return {
      isHighlighted: false,
    };
  },
};
</script>

<style scoped>
@keyframes border-line {
  0% {
    clip-path: inset(100% 0 0 0);
  }
  25% {
    clip-path: inset(0 0 0 100%);
  }
  50% {
    clip-path: inset(0 0 100% 0);
  }
  75% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}

.animate-border-line {
  border: 0.35em solid #d64161; /* Tailwind blue-500 */
  border-radius: 0.5rem; /* match the target's border radius */
  animation: border-line 1.65s linear infinite;
  content: "";
  position: absolute;
  z-index: 0;
  box-sizing: border-box;
}
</style>
