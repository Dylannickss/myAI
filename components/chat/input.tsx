export default function ChatInput({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const form = useForm({
    defaultValues: {
      message: "",
    },
  });

  return (
    <>
      {/* Container for Chat Input */}
      <div className="z-10 flex flex-col justify-center items-center fixed bottom-0 w-full p-5 pb-6 bg-gradient-to-r from-green-500 to-green-700 text-white text-base shadow-lg">
        
        {/* Input Box */}
        <div className="max-w-screen-lg w-full">
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className={`flex-0 flex w-full p-2 border rounded-full shadow-sm ${
                isFocused ? "ring-2 ring-white ring-offset-2" : ""
              }`}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input
                        {...field}
                        onChange={handleInputChange}
                        value={input}
                        className="border-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 bg-transparent text-white"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Type your message here..."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white text-green-700 hover:bg-green-200 transition"
                disabled={input.trim() === "" || isLoading}
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Footer is now separate from the chat input */}
      <div className="pb-20"></div> {/* Ensures footer has space */}
      <ChatFooter />
    </>
  );
}
