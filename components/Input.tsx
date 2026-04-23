function Input({
  onChange,
  placeholder
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <input
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className='border border-gray-300 rounded-md px-4 py-2 w-full'
    />
  )
}
export default Input