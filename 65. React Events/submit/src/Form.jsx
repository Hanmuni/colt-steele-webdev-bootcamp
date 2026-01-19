function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Submit Sucess!");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
