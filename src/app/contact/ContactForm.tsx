import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormInput {
  user_name: string;
  user_email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>();

  const onSubmit: SubmitHandler<ContactFormInput> = (data) => {
    console.log('Form Data Submitted: ', data)
  }
  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-4xl text-accent">Let's work together</h3>
      <p className="text-white/60">
        Working with me, trust is the foundation of my work. I prioritize clear communication, reliability, and expert solutions tailored to your needs. By collaborating closely, I ensure your vision drives results. Let's build success together!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type='text'
          placeholder="Firstname"
          {...register('user_name', {
            required: 'Firstname is required',
            minLength: { value: 3, message: 'Minium 3 characters'},
          })}
        />
        {errors.user_name && (
          <span className="text-accent">{errors.user_name.message}</span>
        )}

        <Input type="text" placeholder="Lastname" />
        <Input type="email"
          placeholder="Email Address"
          {...register('user_email', {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@(gmail+\.)[\w-]{2,4}$/,
              message: "Enter a valid Gmail address",
            }
          })}
        />
        {errors.user_email && (
          <span className="text-accent">{errors.user_email.message}</span>
        )}
        
        <Input type="tel"
          placeholder="Phone number"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10,12}$/,
              message: "Enter a valid phone number",
            }
          })}
        />
        {errors.phone && (
          <span className="text-accent">{errors.phone.message}</span>
        )}
      </div>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="ux-ui-design">UX/UI Design</SelectItem>
            <SelectItem value="logo-design">Logo Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Textarea
        className="h-[200px]"
        placeholder="Type your message here."
        {...register('message', {
          required: 'Message cannot be empty',
          minLength: {
            value: 10,
            message: 'Message should be at least 10 characters',
          }
        })}
      />
      {errors.message && (
        <span className="text-accent">{errors.message.message}</span>
      )}

      <Button className="max-w-40" type="submit">
        Send message
      </Button>
    </form>
  )
}

export default ContactForm;