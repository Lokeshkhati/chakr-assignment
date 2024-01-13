import ArrowDownIcon from "../icons/ArrowDownIcon"
import ArrowUpIcon from "../icons/ArrowUpIcon"
import BudgetCard from "./BudgetCard"

const BudgetList = () => {
    const budgetData = [
        {
            title: 'Total Budget',
            amount: 85125,
            icon: <ArrowDownIcon />
        },
        {
            title: 'Monthly Budget',
            amount: 85125,
            icon: <ArrowDownIcon color="white" />
        },
        {
            title: 'Weekly Budget',
            amount: 85125,
            icon: <ArrowUpIcon />
        },
        {
            title: 'Todays Budget',
            amount: 85125,
            icon: <ArrowUpIcon />
        },

    ]
    return (
        <ul className="py-[30px] px-[20px] justify-center sm:justify-between flex flex-wrap gap-[50px]  ">
            {
                budgetData.map((item) => <BudgetCard key={item.title} budget={item} />)
            }
        </ul>
    )
}
export default BudgetList