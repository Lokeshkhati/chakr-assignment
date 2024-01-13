import { classNames } from "@/utils"

const BudgetCard = ({ budget }: any) => {
    return (
        <div className={classNames(budget.title === "Monthly Budget" ? "bg-[#5B6AD0] text-white" : "bg-[#F8F8F8] text-[#757D8A]", ' flex flex-col gap-4 w-[250px] height-[130px] rounded-[10px] px-[18px] py-[22px]')}>
            <div className=" text-[16px] items-center flex gap-2">
                <span>{budget.title} </span>
                <span>{budget.icon} </span>
            </div>
            <h3 className={classNames(budget.title === "Monthly Budget" ? "text-white" : 'text-[#404D61]', " text-[22px] font-bold")}>$ {budget.amount.toFixed(2)}</h3>
        </div>
    )
}
export default BudgetCard
