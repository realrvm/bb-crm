import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SettingsCalculatorType = {
  monthly_rate: string;
  commission_on_issue: number;
  commission_monthly: string;
  monthly_insurance: string;
  last_installment: string;
};

const SettingsCalculatorSchema: ZodType<SettingsCalculatorType> = z.object({
  monthly_rate: z.string().min(1, { message: "Минимум 1 цифра" }),
  commission_on_issue: z.coerce.number(),
  commission_monthly: z.string(),
  monthly_insurance: z.string(),
  last_installment: z.string(),
});

export const useAppForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsCalculatorType>({
    resolver: zodResolver(SettingsCalculatorSchema),
  });

  return { register, handleSubmit, errors };
};
