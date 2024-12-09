function Footer(props) {
  const classes = `footer ${props.dark ? "bg-gray-800 text-white" : "bg-[#81D8D0] text-black"} py-4 text-center`;

  return (
    <footer className={classes}>
      <p className="text-sm">
        Criado por <span className="font-semibold"> João Vinicius, Amanda Rangel e Rafael Lemos</span> | &copy; {new Date().getFullYear()} Restaurante Delícias
      </p>
    </footer>
  );
}

export default Footer;
