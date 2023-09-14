export default function Column(props) {
  return (
    <>
      {/*Make this div and image reusable to easily change the partner Image anytime and to stop make many divs*/}
      <div className="col-lg-2 col-sm-4 col-6">
        <img src={props.source} alt="client1" />
      </div>
    </>
  );
}
