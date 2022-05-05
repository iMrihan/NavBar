import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import dropOneData from "../utils/dropdownOne.json";
import dropTwoData from "../utils/dropdownTwo.json";

export default function Navbar() {
	const [dropdown1, setDropdown1] = useState(false);
	const [dropdown2, setDropdown2] = useState(false);

	console.log(dropTwoData);
	return (
		<div id="navbar">
			<div className="emptyDiv"></div>
			<div id="upper_navbar">
				<div id="inside_upper_navbar">
					<div id="navbar1">
						<Link to="#">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="50"
									width="200"
									color="#222222"
									viewBox="0 0 259 64"
									className="headerLogo">
									<g fill="currentColor" fillRule="evenodd">
										<g fill="currentColor" fillRule="nonzero">
											<g>
												<path
													d="M54.998 9.03C48.853 3.01 40.261 0 29.286 0H0v63.15h29.098c10.724 0 19.253-3.01 25.587-9.092 6.206-5.796 9.65-13.961 9.47-22.451.273-8.481-3.053-16.682-9.157-22.576zm-24.27 41.955c-7.057-.011-13.572-3.787-17.091-9.905-3.52-6.117-3.507-13.647.031-19.754 3.539-6.106 10.066-9.86 17.124-9.85 10.91.018 19.74 8.876 19.722 19.786-.017 10.91-8.875 19.74-19.785 19.723zm59.264-29.036h7.337c6.083 0 9.783 3.763 9.783 9.595 0 5.832-3.7 9.595-9.783 9.595h-7.337v-19.19zm7.086 14.863c3.198 0 5.017-2.007 5.017-5.268 0-3.26-1.819-5.268-5.017-5.268h-2.07v10.536h2.07zm26.903-14.863v4.327h-8.905v3.01h8.153v4.202h-8.153v3.324h8.905v4.327H110.06v-19.19h13.922zm8.341 12.856v6.334h-5.017v-19.19h8.717c4.202 0 7.086 2.32 7.086 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.644l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm22.702 10.347l-4.077-11.414V41.14h-4.766v-19.19h6.209l4.264 11.978 4.265-11.978h6.145v19.253h-4.766V29.725l-4.013 11.414h-3.261zm20.005-5.644c.439 1.317 1.568 1.944 3.135 1.944 1.568 0 2.634-.627 2.634-1.819 0-.878-.627-1.317-1.818-1.567l-3.763-.753c-2.822-.627-5.017-2.07-5.017-5.33 0-3.763 3.136-6.209 7.463-6.209 4.766 0 7.462 2.571 7.964 5.895h-4.954c-.44-1.066-1.317-1.881-2.948-1.881-1.442 0-2.445.627-2.445 1.693 0 .815.627 1.317 1.63 1.505l3.826.878c3.323.752 5.142 2.571 5.142 5.518 0 3.951-3.324 6.209-7.588 6.209-4.64 0-7.84-2.195-8.529-6.02h5.268v-.063zm11.852-13.546h17.058v4.327h-6.02v14.926h-5.08V26.276h-5.958V21.95zm27.092 19.504c-5.581 0-9.47-4.202-9.47-9.909 0-5.77 3.889-9.908 9.47-9.908 5.644 0 9.532 4.139 9.532 9.908 0 5.77-3.888 9.909-9.532 9.909zm0-15.428c-2.634 0-4.327 2.195-4.327 5.52 0 3.323 1.693 5.518 4.327 5.518s4.39-2.195 4.39-5.519c0-3.324-1.756-5.519-4.39-5.519zm16.681 8.78v6.334h-5.017v-19.19h8.717c4.202 0 7.087 2.32 7.087 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.645l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm27.782-8.843v4.327h-8.905v3.01h8.152v4.202h-8.152v3.324h8.905v4.327h-13.86v-19.19h13.86z"
													transform="translate(-890 -121) translate(890 121)"></path>
											</g>
										</g>
									</g>
								</svg>
							</div>
						</Link>
					</div>
					<div id="searchbar">
						<input
							type="text"
							placeholder="Search for a product or brand..."
							id="inputsearch"
						/>
						<div>
							<button id="search_btn">
								<svg
									width="22"
									height="22"
									border="none"
									viewBox="0 0 24 24"
									stroke="black"
									fill="white">
									<title>Search</title>
									<path
										d="M22 22l-6.344-6.344M10 18a8 8 0 100-16 8 8 0 000 16z"
										stroke="inherit"
										fill="white"
										strokeWidth="2"
										strokeMiterlimit="0"
										strokeLinecap="round"
										strokeLinejoin="round"></path>
								</svg>
							</button>
						</div>
					</div>

					<div id="logos">
						<Link
							to=""
							className="link"
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "80px",
								fontSize: "14px",
							}}>
							<div>
								<svg
									className="UserDropDowns_icon_06"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									stroke="#2F3337"
									fill="#2F3337">
									<title>User</title>
									<path
										d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 100-12 6 6 0 000 12z"
										stroke="inherit"
										fill="none"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"></path>
								</svg>
							</div>
							<p style={{ marginTop: "12px" }}>Account</p>
						</Link>

						<Link
							to=""
							className="link"
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "60px",
								fontSize: "14px",
							}}>
							<div>
								<svg
									className="UserDropDowns_icon_06"
									width="22"
									height="21"
									viewBox="0 0 24 24"
									stroke="#2F3337"
									fill="#2F3337">
									<title>Cart Empty</title>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.174 14.4L5.208.833C5.14.356 4.697 0 4.174 0h-3.13C.466 0 0 .43 0 .96s.467.96 1.043.96H3.26l1.966 13.567c.07.477.512.833 1.035.833h14.608c.498 0 .926-.323 1.024-.772l2.087-9.6c.113-.52-.254-1.025-.819-1.13-.565-.103-1.115.234-1.228.754L20.014 14.4H7.174zm.13 9.6a2.087 2.087 0 100-4.174 2.087 2.087 0 000 4.174zm14.61-2.087a2.087 2.087 0 11-4.175 0 2.087 2.087 0 014.174 0z"
										stroke="none"
										fill="inherit"></path>
								</svg>
							</div>

							<p style={{ marginTop: "12px" }}>Cart</p>
						</Link>
					</div>
				</div>
			</div>
			<nav id="lower_navbar">
				<div
					id="drop1"
					onMouseEnter={() => {
						setDropdown1(true);
					}}
					onMouseLeave={() => setDropdown1(false)}>
					<Link to="" className="link">
						Brands
					</Link>
					{dropdown1 && (
						<div id="drop_1">
							{dropOneData.map((e) => (
								<div key={e.id}>
									<p style={{ padding: "7px" }}>
										<Link to={e.to} className="link">
											{e.title}
										</Link>
									</p>
								</div>
							))}
						</div>
					)}
				</div>
				<div
					id="drop1"
					onMouseEnter={() => {
						setDropdown2(true);
					}}
					onMouseLeave={() => setDropdown2(false)}>
					<Link to="" className="link">
						Browse By
					</Link>
					{dropdown2 && (
						<div id="drop_2">
							{dropTwoData.map((e) => (
								<div key={e.id}>
									<h3
										style={{
											padding: "8px",
											fontWeight: "bold",
											fontSize: "25px",
										}}>
										<Link to={e.to} className="link">
											{e.title}
										</Link>
									</h3>
									<div>
										{e.products.map((el) => (
											<div key={el.id}>
												<p
													style={{
														padding: "8px",
														// fontSize: "25px",
													}}>
													<Link to={el.to} className="link">
														{el.title}
													</Link>
												</p>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<div id="drop3">
					<Link to="" className="link">
						Bestsellers
					</Link>
				</div>
				<div id="drop4">
					<Link to="" className="link">
						Skin Care
					</Link>
				</div>
				<div id="drop5">
					<Link to="" className="link">
						Makeup
					</Link>
				</div>
				<div id="drop6">
					<Link to="" className="link">
						Hair Care
					</Link>
				</div>
				<div id="drop7">
					<Link to="" className="link">
						Bath & Body
					</Link>
				</div>
				<div id="drop8">
					<Link to="" className="link">
						Tools & Devices
					</Link>
				</div>
				<div id="drop9">
					<Link to="" className="link">
						Gifts & Sets
					</Link>
				</div>
				<div id="drop10">
					<Link to="" className="link">
						BeautyFIX
					</Link>
				</div>
				<div id="drop11">
					<Link to="" className="link">
						Sale
					</Link>
				</div>
				<div id="drop12">
					<Link to="" className="link">
						New
					</Link>
				</div>
				<div id="drop13">
					<Link to="" className="link">
						Skin 101
					</Link>
				</div>
			</nav>

			<div id="drop_3">
				<div>
					<Link to="#" className="bold_letters">
						Area Rugs By Size
					</Link>
					<Link to="#">3'×5'</Link>
					<Link to="#">4'×6'</Link>
					<Link to="#">5'×8'</Link>
					<Link to="#">6'×9'</Link>
					<Link to="#">7'×9'</Link>
					<Link to="#">8'×10'</Link>
					<Link to="#">9'×10'</Link>
					<Link to="#">10'×14'</Link>
					<Link to="#">Runner</Link>
					<Link to="#" className="bold_letters">
						Trending Rugs
					</Link>
					<Link to="#">Washable Rugs</Link>
					<Link to="#">Round Rugs</Link>
					<Link to="#">Shag Rugs</Link>
					<Link to="#">Wool Rugs</Link>
					<Link to="#">Jute Rugs</Link>
					<Link to="#">Cowhide Rugs</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Area Rugs By Color
					</Link>
					<Link to="#">Grey</Link>
					<Link to="#">Blue</Link>
					<Link to="#">Ivory</Link>
					<Link to="#">White</Link>
					<Link to="#">Black</Link>
					<Link to="#">Red</Link>
					<Link to="#">Brown</Link>
					<Link to="#">Orange</Link>
					<Link to="#">Pink</Link>
					<Link to="#" className="bold_letters">
						Area Rugs By Style
					</Link>
					<Link to="#">Modern & Contemporary</Link>
					<Link to="#">Bohemian & Eclectic</Link>
					<Link to="#">Persian</Link>
					<Link to="#">Geometric</Link>
					<Link to="#">Abstract</Link>
					<Link to="#">Solid</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Rugs By Type
					</Link>
					<Link to="#">Area Rugs</Link>
					<Link to="#">Outdoor Rugs</Link>
					<Link to="#">Rug Pads</Link>
					<Link to="#">One of a Kind Rugs</Link>
					<Link to="#">Kids & Tweens Rugs</Link>
					<Link to="#">Door Mats</Link>
					<Link to="#">Stair Treads</Link>
					<Link to="#">Kitchen Mats & Rugs</Link>
					<Link to="#">Bath & Rugs</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/b320fbbc82c3e52fbc4d9677db915ee03aa504c1/SAFAVIEH-Madison-Diederike-Boho-Medallion-Distressed-Rug.jpg?imwidth=320"
						alt=""
					/>
					<Link to="#">Extra 15% off</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_3">
				<div>
					<Link to="#" className="bold_letters">
						Mirrors
					</Link>
					<Link to="#">Wall Mirrors</Link>
					<Link to="#">Bathroom Vanity Mirrors</Link>
					<Link to="#">Floor Mirrors</Link>
					<Link to="#">Full Length Mirrors</Link>
					<Link to="#">Rectangular Mirrors</Link>
					<Link to="#">Round Mirrors</Link>
					<Link to="#">Window Mirrors</Link>
					<Link to="#">Mirror Sets</Link>
					<Link to="#" className="bold_letters">
						Art Gallery
					</Link>
					<Link to="#">Gallery Wrapped Canvas</Link>
					<Link to="#">Canvas Art</Link>
					<Link to="#">Framed Prints</Link>
					<Link to="#">Unframed Prints</Link>
					<Link to="#">Metal Art</Link>
					<Link to="#">Wood wall Art</Link>
					<Link to="#">Matching Sets</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Decorative Accessories
					</Link>
					<Link to="#">Indoor Fireplaces</Link>
					<Link to="#">Outdoor Decor</Link>
					<Link to="#">Accent Pieces</Link>
					<Link to="#">Silk Plants</Link>
					<Link to="#">Candles and Holders</Link>
					<Link to="#">Vases</Link>
					<Link to="#">Room Dividers</Link>
					<Link to="#">Photo Frames and Albums</Link>
					<Link to="#">Planters, Hangers & Stands</Link>
					<Link to="#" className="bold_letters">
						Window Treatments
					</Link>
					<Link to="#">Curtains & Drapes</Link>
					<Link to="#">Blinds & Shades</Link>
					<Link to="#">Curtain Rods & Hardware</Link>
					<Link to="#">Sheer Curtains</Link>
					<Link to="#">Blackout Curtains</Link>
					<Link to="#">Kitchen Curtains</Link>
					<Link to="#">Valances</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Wall Decor
					</Link>
					<Link to="#">Decorative Shelves</Link>
					<Link to="#">Wall Tapestries</Link>
					<Link to="#">Clocks</Link>
					<Link to="#">Wall Decals</Link>
					<Link to="#">Acrylic Wall Art</Link>
					<Link to="#" className="bold_letters">
						Throw Pillows
					</Link>
					<Link to="#">Accent Pillows</Link>
					<Link to="#">Outdoor Pillows</Link>
					<Link to="#">Floor Pillows</Link>
					<Link to="#">Poufs</Link>
					<Link to="#">Pillow Covers</Link>
					<Link to="#">Bed Rest</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/d28cbaf23c439090fa43c0cf806ac147b7e1040f/Arched-Dressing-Mirror-Full-length-Floor-Mirror-with-Standing.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_4">
				<div>
					<Link to="#" className="bold_letters">
						Bedding
					</Link>
					<Link to="#">Comforter Sets</Link>
					<Link to="#">Duvet Covers</Link>
					<Link to="#">Bed in a Bag</Link>
					<Link to="#">Quilts & Coverlets</Link>
					<Link to="#">Blankets & Throws</Link>
					<Link to="#">Shower Curtains</Link>
					<Link to="#">Towels</Link>
					<Link to="#">Bath & Mats</Link>
					<Link to="#">Bath Robes</Link>
					<Link to="#">Bath Accessories</Link>
					<Link to="#">Bath Robes</Link>
					<Link to="#"> Kids Bath</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Bedding Basics
					</Link>
					<Link to="#">Sheets & Pillowcases</Link>
					<Link to="#">Mattress & Toppers</Link>
					<Link to="#">Comforters & Duvet Inserts</Link>
					<Link to="#">Pillows</Link>
					<Link to="#">Cotton Bedding</Link>
					<Link to="#" className="bold_letters">
						Kids Bedding
					</Link>
					<Link to="#">Kids Sheets</Link>
					<Link to="#">Kids Comforter Sets</Link>
					<Link to="#">Kids Bed in a Bag</Link>
					<Link to="#">Kids Quilts</Link>
					<Link to="#">Kids Bed Tents & Canopies</Link>
					<Link to="#">Kids Mattress</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Mattress
					</Link>
					<Link to="#">Twin</Link>
					<Link to="#">Twin XL</Link>
					<Link to="#">Full</Link>
					<Link to="#">Queen</Link>
					<Link to="#">King</Link>
					<Link to="#">California King</Link>
					<Link to="#">Air Mattress</Link>
					<Link to="#">Mattress in a Box</Link>
					<Link to="#" className="bold_letters">
						Bathroom Furniture
					</Link>
					<Link to="#">Bathroom Vanities</Link>
					<Link to="#">Bathroom Vanity Mirrors</Link>
					<Link to="#">Bathroom Sinks</Link>
					<Link to="#">Bathroom Faucets</Link>
					<Link to="#">Bathroom Cabinets</Link>
					<Link to="#">Tubs</Link>
					<Link to="#">Showers</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/aae7298c6dad6ee752e90b9ada8625407c000547/Intelligent-Design-Leena-Shaggy-Faux-Fur-Comforter-Set.jpg"
						alt=""
					/>
					<Link to="#">Extra 15% off</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_5">
				<div>
					<Link to="#" className="bold_letters">
						Kitchen
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Flooring & Wall
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Bathroom
					</Link>
					<Link to="#">Bathroom Vanities</Link>
					<Link to="#">Bathroom Vanity Mirrors</Link>
					<Link to="#">Bathroom Sinks</Link>
					<Link to="#">Bathroom Faucets</Link>
					<Link to="#">Bathroom Cabinets</Link>
					<Link to="#">Tubs</Link>
					<Link to="#">Showers</Link>
					<Link to="#" className="bold_letters">
						Bathroom
					</Link>
					<Link to="#">Home Essentials</Link>
					<Link to="#">Vacuums & Floorcare</Link>
					<Link to="#">Heating & Cooling</Link>
					<Link to="#">Air Quality</Link>
					<Link to="#">Sewing Machines</Link>
					<Link to="#">Craft Machines</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Storage & Organization
					</Link>
					<Link to="#">Outdoor Storage</Link>
					<Link to="#">Garage Storage</Link>
					<Link to="#">Decorative Storage</Link>
					<Link to="#">Closet Organizers</Link>
					<Link to="#">Kitchen & Pantry</Link>
					<Link to="#">Cabinets</Link>
					<Link to="#">Furniture Storage</Link>
					<Link to="#">Safes</Link>
					<Link to="#">Laundry Room</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/fe65fb3c91f141cb3bc6d2f2f06911180a97c388/Proox-Single-handle-Kitchen-Faucet-Pull-Down-Sprayer-w--Soap-dispenser.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_6">
				<div>
					<Link to="#" className="bold_letters">
						Dinnerware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#" className="bold_letters">
						Cookware & Bakeware
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kitchen Furniture
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#" className="bold_letters">
						Kitchen Appliances
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Serveware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#" className="bold_letters">
						Kitchen Storage
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/7508194/Hamilton-Beach-26030-Belgian-Waffle-Maker-9e4e0fb9-116d-44c4-9b97-2805b4e2519c_1000.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_7">
				<div>
					<Link to="#" className="bold_letters">
						Dinnerware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Cookware & Bakeware
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kitchen Furniture
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Kitchen Appliances
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Serveware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#" className="bold_letters">
						Kitchen Storage
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					{/* <img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/3735ba1b91fa8acfb23da0e7afe50208ada16293/Elias-Outdoor-Acacia-Wood-Outdoor-Chat-Set-by-Christopher-Knight-Home.jpg"
					/> */}
					<Link to="#">Extra 15% off</Link>
					<Link to="#">Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_8">
				<div>
					<Link to="#" className="bold_letters">
						Dinnerware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Cookware & Bakeware
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kitchen Furniture
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Kitchen Appliances
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Serveware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#" className="bold_letters">
						Kitchen Storage
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/29068043/Annello-by-Kobelli-14k-Gold-4-Carats-TGW-Oval-Moissanite-Three-Stone-X-Prong-Trellis-Bold-Engagement-Ring-HI-VS-cfa6c2e1-ceaa-4840-805d-66cab8a7ff61_1000.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_9">
				<div>
					<Link to="#" className="bold_letters">
						Dinnerware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Cookware & Bakeware
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kitchen Furniture
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Kitchen Appliances
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Serveware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#" className="bold_letters">
						Kitchen Storage
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/69d6ab9a69fc24a9f5adf1ccef4d0fcf833bf07e/Aged-Wood-Beaded-6-Light-Candle-Chandelier.jpg"
						alt=""
					/>
					<Link to="#" id="extraOff_p">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_10">
				<div>
					<Link to="#" className="bold_letters">
						Dinnerware
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>

					<Link to="#" className="bold_letters">
						Cookware & Bakeware
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kitchen Furniture
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>

					<Link to="#" className="bold_letters">
						Kitchen Appliances
					</Link>

					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Kids Bedding
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/b5b17dc8e98e0cfb4ea68622068adf35178581c0/Qaba-Large-Kids-Kitchen-Playset-with-Telephone%2C-Water-Dispenser-Simulation-Cooking-Set-for-Girls-and-Boys%2C-White.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>
			<div id="drop_11">
				<div>
					<Link to="#" className="bold_letters">
						Holiday
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Health & Beauty
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Gifting
					</Link>
					<Link to="#">ranges & Ovens</Link>

					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#" className="bold_letters">
						Exercise Equipemnts
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>

					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<Link to="#" className="bold_letters">
						Pet Supplies
					</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#">Refrigerators</Link>
					<Link to="#">Kitchen Faucets</Link>
					<Link to="#">ranges & Ovens</Link>
					<Link to="#" className="bold_letters">
						Entryway
					</Link>
					<Link to="#">Tile</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Wallpaper</Link>
					<Link to="#">Laminate Flooring</Link>
					<Link to="#">Vinyl Flooring</Link>
					<Link to="#">Wallpaper</Link>
				</div>
				<div>
					<img
						className="div_img"
						src="https://ak1.ostkcdn.com/images/products/is/images/direct/d9d332346a904102baba51d75106bdad99541592/Soozier-Heavy-Duty-Multi-Function-Power-Rack-Cage-Home-Gym-Exercise-Workout-Station-Strength-Training-w--Stand-Rod.jpg"
						alt=""
					/>
					<Link to="#" className="bold_letters">
						Extra 15% off
					</Link>
					<Link to="#">Select Furniture by Christopher Knight</Link>
					<Link to="#" className="bold_letters">
						More Ways to Shop
					</Link>
					<Link to="#" className="red">
						Featured sales
					</Link>
					<Link to="#" className="red">
						New Arrivals
					</Link>
					<Link to="#" className="red">
						Clearance
					</Link>
					<Link to="#" className="red">
						Furniture Advice
					</Link>
				</div>
			</div>

			<div id="drop_13">
				<div id="drop13_div1">
					<div>
						<p>sales & deals</p>
					</div>
					<div>
						<p>shop.save.love.repeat</p>
					</div>
					<div>
						<p>Shop Now</p>
					</div>
				</div>
				<div id="drop13_div2">
					<div>
						<img
							className="div_img"
							src="https://ak1.ostkcdn.com/img/mxc/03212022-TNFlyout.svg?imwidth=320"
							alt=""
						/>
						<div>
							<p>Huge Savings on </p>
							<p>Top-Rated Items</p>
						</div>
					</div>
					<div>
						<img
							className="div_img"
							src="https://ak1.ostkcdn.com/images/products/is/images/direct/673bd6063bf22dd9d2dbc73bfea18bd40d61d72a/Ovios-5-piece-Outdoor-High-back-Wicker-Sectional-Set.jpg?imwidth=320"
							alt=""
						/>
						<div>
							<p>Extra 15% off</p>
							<p>On Patio Products</p>
						</div>
					</div>
					<div>
						<img
							className="div_img"
							src="https://ak1.ostkcdn.com/images/products/is/images/direct/d19008eaea0670f4500742121ec56fb6dcf2bf0e/Carson-Carrington-Telsiai-Triangle-Wood-Coffee-Table.jpg?imwidth=320"
							alt=""
						/>
						<div>
							<p>Extra 15% off</p>
							<p>Select Coffee & Accent Tables</p>
						</div>
					</div>
					<div>
						<img
							className="div_img"
							src="https://ak1.ostkcdn.com/images/products/is/images/direct/494923ecc209c803a91250cd746ce777379fbe6e/Glitzhome-22%22D-Artificial-Easter-Eggs-Wreath.jpg?imwidth=320"
							alt=""
						/>
						<div>
							<p>Save on</p>
							<p>Easter Essentials</p>
						</div>
					</div>
				</div>
			</div>
			<div className="hr"></div>
		</div>
	);
}
