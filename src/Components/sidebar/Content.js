import { InfoOutlined, KeyboardArrowDownRounded, MoreHoriz, TimelapseOutlined } from '@material-ui/icons'
import React from 'react'
import "./Content.css"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts"


const data = [
    {
        day: "SUN",
        rupee: 20,
        rupee1: 40,
        percentage: 0
    }, {
        day: "MON",
        rupee: 50,
        rupee1: 30,
        percentage: 20
    }, {
        day: "TUS",
        rupee: 40,
        rupee1: 55,
        percentage: 40
    }, {
        day: "WED",
        rupee: 80,
        rupee1: 30,
        percentage: 60
    }, {
        day: "THU",
        rupee: 50,
        rupee1: 50,
        percentage: 80
    }, {
        day: "FRI",
        rupee: 55,
        rupee1: 40,
        percentage: 90
    }, {
        day: "SAT",
        rupee: 45,
        rupee1: 20,
        percentage: 100
    }
]

const data2 = [
    {
        month: "",
        rupee: 0,
        rupee1: 0,
        price: 0
    },
    {
        month: "Feb",
        rupee: 12,
        rupee1: 20,
        price: 5
    }, {
        month: "Mar",
        rupee: 15,
        rupee1: 25,
        price: 10
    }, {
        month: "Apr",
        rupee: 11,
        rupee1: 19,
        price: 15
    }, {
        month: "May",
        rupee: 18,
        rupee1: 28,
        price: 20
    }, {
        month: "June",
        rupee: 15,
        rupee1: 24,
        price: 25
    }, {
        month: "July",
        rupee: 18,
        rupee1: 27,
        price: 30
    }, {
        month: "Aug",
        rupee: 19,
        rupee1: 32,
        price: 35
    }, {
        month: "Sep",
        rupee: 18,
        rupee1: 30,
        price: 40
    }, {
        month: "OCT",
        rupee: 15,
        rupee1: 24,
        price: 45
    }
]
const Content = () => {
    console.log(document.getElementsByClassName('recharts-surface'))

    return (
        <div className="main_body">
            <div className="content_1">
                <div className="first_content_box">
                    <div className="f-c-1">
                        <div className="revenue">
                            <div className="revenue_detailbox">
                                <TimelapseOutlined />
                            </div>
                            <div>
                                <span>revenue</span>
                                <span><b>$67.90</b></span>
                            </div>
                        </div>
                        <div className="revenue_percentege">
                            12%
                        </div>
                    </div>
                    <div className="f-c-1" style={{ margin: "0 2vmax" }}>
                        <div className="revenue">
                            <div className="revenue_detailbox">
                                <TimelapseOutlined />
                            </div>
                            <div>
                                <span>revenue</span>
                                <span><b>$67.90</b></span>
                            </div>
                        </div>
                        <div className="revenue_percentege" style={{ color: "red" }}>
                            12%
                        </div>
                    </div>
                    <div className="f-c-1">
                        <div className="revenue">
                            <div className="revenue_detailbox">
                                <TimelapseOutlined />
                            </div>
                            <div>
                                <span>revenue</span>
                                <span><b>$67.90</b></span>
                            </div>
                        </div>
                        <div className="revenue_percentege" style={{ color: "red" }}>
                            12%
                        </div>
                    </div>
                </div>
                <div className="second_content_box">
                    <div className="s_c_1">
                        <div>
                            <strong>overview</strong>
                        </div>
                        <div>
                            <span style={{marginRight:"0.5vmax"}}><b>Sort by:</b></span>
                            <span style={{marginRight:"0.5vmax"}}>yearly</span>
                            <KeyboardArrowDownRounded />
                        </div>
                    </div>
                    <div className="s_c_2">
                        <div>
                            <div>
                                <p style={{ margin: "0" }}>this month</p>
                                <div>
                                    <p style={{ margin: "0", paddingTop: "0.1vmax" }}><b style={{ fontSize: "1.1rem" }}>$24,568 </b><span style={{ marginLeft: "0.5vmax", padding: "o.05vmax", backgroundColor: "whitesmoke", borderRadius: "10px", color: "green" }}>+2.65%</span></p>

                                </div>
                            </div>
                            <div>
                                <div>
                                    <div><span>ordrs</span><strong>5000</strong></div>
                                    <div><span>ordrs value</span><strong>12.03%</strong></div>
                                    <div><span>income</span><strong>$35,652</strong></div>
                                </div>
                                <div><div><span>sales</span><strong>21,400</strong></div>
                                    <div><span>customers</span><strong>16,265</strong></div>
                                    <div><span>expanses</span><strong>$12,248</strong></div></div>
                            </div>
                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                                <LineChart data={data2}>
                                    <XAxis dataKey="month" interval={"preserveStartEnd"} />
                                    <YAxis dataKey="price" interval={"preserveStartEnd"} />
                                    <Line dataKey="rupee" />
                                    <Line dataKey="rupee1" />
                                </LineChart>

                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="third_content_box">
                    <div className="t_c_1">
                        <div>
                            <div>
                                <div><strong>User activity</strong></div>
                                <div>
                                    <p>Weekely</p> <KeyboardArrowDownRounded />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>This month</p>
                                    <strong>User activity</strong>
                                </div>
                                <div>
                                    <p>current</p><p>previous</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                                <LineChart data={data}>
                                    <XAxis dataKey="day" />
                                    <YAxis dataKey="percentage" />
                                    <Line dataKey="rupee" />
                                    <Line dataKey="rupee1" />
                                </LineChart>

                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="t_c_2" style={{ margin: "0 3vmax" }}>
                        <div>
                            <div><strong>Order status</strong></div>
                            <div><MoreHoriz /></div>
                        </div>
                        <div>
                            <div className="circle_widget">
                                <div className="circle_value"></div>
                                <span className='circle_lable'></span>
                            </div>

                        </div>
                        <div><span>completed</span>
                            <span style={{ margin: "0 1.4vmax" }}>pending</span>
                            <span>cancel</span>
                        </div>
                    </div>
                    <div className="t_c_3">
                        <div className="t_c_3_1">
                            <div>
                                <strong>Top product</strong>
                            </div>
                            <div>
                                <p>monthly</p><KeyboardArrowDownRounded />
                            </div>
                        </div>
                        <div className="t_c_3_2">
                            <div>
                                <div>
                                    <div>
                                        #1
                                    </div>
                                    <div>
                                        <p>Polo-blue t-shirt</p>
                                        <strong>$25.4</strong>
                                    </div>
                                </div>
                                <div>
                                    <div>#2</div>
                                    <div>
                                        <p>Hoodie for men</p>
                                        <strong>$24.5</strong>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ "marginLeft": "0.3vmax" }}>#3</div>
                                    <div>
                                        <p>Hoodie color cap</p>
                                        <strong>$22.5</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    3.82k
                                </div>
                                <div>
                                    3.14k
                                </div>
                                <div>
                                    2.84k
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_2">
                <div className='imgagediv'>
                    <div>
                        <span className='imgright'><MoreHoriz /></span>
                    </div>
                    <div>
                        <strong>Sidhant Nahak</strong>
                        <span>Web devloper</span>
                    </div>
                    <div>
                        <div><strong>1,269</strong><span>products</span></div>
                        <div><strong>5.2k</strong><span>followers</span></div>
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Earning</strong><InfoOutlined />
                    </div>
                    <div>
                        <div className="halfcircle_widget">
                            76%
                        </div>
                        <strong>
                            $26,256
                        </strong>
                        <p>Earning this month</p>
                        <p style={{ paddingBottom: "1vmax" }}><span style={{ padding: "0.1vmax", color: "green", backgroundColor: "whitesmoke" }}>+2.56%</span ><span style={{ paddingLeft: "0.5vmax" }}>from previous period</span> </p>
                    </div>
                </div>
                <div style={{borderBottom:"none"}}>
                    <p><b>Recent Activity</b></p>
                    <div className='lastclass'>
                        <div>
                            <div><strong>12</strong>
                                <span>Sep</span>
                            </div>
                            <p className='p'>Responed to need voluntary activities</p>
                        </div>
                        <div>
                            <div><strong>11</strong>
                                <span>Sep</span>
                            </div>
                            <p className='p'>Everyone realises would be desire <br /><span style={{color:"blue"}}>Read more...</span></p>
                        </div>
                        <div>
                            <div>
                                <strong>10</strong>
                                <span>Sep</span>
                            </div>
                            <p className='p'>join the group Boardmanship forum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content