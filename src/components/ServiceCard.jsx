const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16px pt-10 pb-10">
      <div className="w-10 h-10 justify-center items-center bg-coral-red rounded-full">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
          className="flex justify-center items-center w-full h-full p-2"
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
