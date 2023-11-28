const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part = {props.content[0]}/>
        <Part part = {props.content[1]}/>
        <Part part = {props.content[2]}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}

      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    content: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content content = {course.content}/>
      <Total total = {course.content}/>
    </div>
  )
}

export default App