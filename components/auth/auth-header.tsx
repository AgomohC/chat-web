export const AuthHeader = (props: { title: string; subtitle: string }) => {
  return (
    <hgroup className="text-center w-full">
      <h2 className="text-xl font-semibold text-gray-700">{props.title}</h2>
      <p className="text-gray-500 text-sm mt-1">{props.subtitle}</p>
    </hgroup>
  )
}
