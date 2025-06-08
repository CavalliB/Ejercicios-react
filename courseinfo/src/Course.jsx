const CourseApp = ({course}) => {
  const Header = ({ course }) => <h1>{course}</h1>;

  const Part = ({ name, exercises }) => (
    <p>
      {name} {exercises}
    </p>
  );

  const Content = ({ parts }) => (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );

  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <p>
        <b>Total of {total} exercises</b>
      </p>
    );
  };

  const Course = ({ course }) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
  return (
    <div>
      {course.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};
export default CourseApp;
