import { blogImage1, blogImage2, blogImage3, blogImage4 } from '../data/Images'

export const Blog = () => {
	const rightImages = [blogImage2, blogImage3, blogImage4]

	const rightImagesElements = rightImages.map((image, index) => {
		return (
			<div className="child" key={index}>
				<div className="image">
					<img src={image} alt="" />
				</div>
				<div className="info">
					<div className="post">
						<p className="seo">SEO Analysis</p>
						<p className="text-muted">24 September 2021</p>
					</div>
					<h3>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h3>
					<p className="text-muted">
						Lorem Ipsum Dolor Sit Amei Eiusmod Tempor, cout
					</p>
				</div>
			</div>
		)
	})
	return (
		<section id="blog" className="blog">
			<div className="container">
				<div className="hero-text">
					<h4>Recent News</h4>
					<h1>
						Check Our Blog
						<span> Posts</span>
					</h1>
					<div className="line"></div>
				</div>
				<div className="content-container">
					<div className="left">
						<img src={blogImage1} alt="" />
						<div className="body">
							<div className="header-content">
								<div className="post">
									<p className="seo">SEO Analysis</p>
									<p className="text-muted">03 August 2021</p>
								</div>
								<h3 className="title">
									Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor
									Incididunt
								</h3>
							</div>
							<div
								className="description text-muted"
								style={{ fontSize: '15px' }}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								doers itii eiumod deis tempor incididunt ut labore.
							</div>
							<div className="author">
								<div className="author-info">
									<img
										src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/author-post.jpg"
										className="author-img"
										alt=""
									/>
									<p>By: Andrea Mentuzi</p>
								</div>
								<button className="discover">Discover More</button>
							</div>
						</div>
					</div>
					<div className="right">{rightImagesElements}</div>
				</div>
			</div>
		</section>
	)
}
