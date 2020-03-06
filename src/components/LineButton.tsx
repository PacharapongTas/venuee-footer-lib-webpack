import * as React from 'react'
import { isMobile } from 'react-device-detect'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import LineIcon from '../assets/line-icon.png'
// import LineQR from '../assets/venuee-line-qr.png'
import { colors } from '../styles/mixins'

const LineIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAA81BMVEUAAAAAugAAugAAugAAugAAuQAAugAAugAAugAAuQAAvQAAwwAA0QAAuQAAugAAuQAAuQAAugAAugAAugAAuQAAugAAugAAuwAAuwAAvAAAyAAAuQAA/wAAugAAugAAuQD////3/Pfj9+OK34p/3H/T89MLvAvZ9Nk8yTz6/frn+OfE78RQz1AGuwZLzUvs+uy467iQ4ZAQvRD2/Pav6a+E3YQwxjDX9NfQ8tCm5qZw13AiwiIbwBt723t12XVg02Dd9t206rSe5J5d0l1V0FVDy0MrxSsnwyfw+/Dp+em+7b5k1WQ4yDjL8cur6KuW4pYWvxYVpmGqAAAAH3RSTlMA7/Tr1LeRdTMsHxMF+eXi39nIw6GGelNSUA4LAoKB9GkSHAAABBNJREFUWMPN2elSGkEUBWD2XaOyaojngqABGTY1gqAIuGuM7/80yaQ6MHN7etYUyffDshRPjb3c6SXkQi5dLhXysZ3o1lZ0J5YvlMrpXCi4aioZj0ASiSdT1UDBqUQUStFEym/uQTIGB7HkgY/g7GEYLoQPsx6DPxcjcClS/OwlufIJHnyquA7OxOFRPOMueT8Mz8L7buZHAr4kHGdRdg8+7WUdmnkXvu3aNnh6GwFsp22SwwgkrMzObCOg7YyiB3cR2K5lX+b28BfsWY3BBP6KhMUchI3JbHA+qvdqtV59dD6YTWBjX+pC5eCYLhe3xNwullPlMOFdqapI93NSmN+rahWrorCizUZkYzTTYKViqvyW9bnTJgftjmX9Nr4bipANx+TCeAhZ0TBZIupH9vPgkfXE+QLJBbl2AcnhalUgD7wj8uBIHoAHIjoJbkCeDMAlRXTMIjlgdkysvsC8kmevYFKWdenhjDw7e7CqUlW+YjwlH075WrNq0R5L8mUptYg8Pk7IlxM+RuSa1yGfOlL9y7FJ3l/V5OaqTPeazRa1ms1n+u2y2SaqN4Wa+FCfTfZcKM2KUkt88hlAXXx/r0/PAfBRFxkfRBqEa/GhFitU6VAZJnck1A3N/hVo/J7O9/TLOXBMhD9uSLiDSTlUYmXJNhoNOfpCUaZKoQJravtovBii39s6IuvGLoTyMGkaoy/l6OnzOvqFvc9gkue1qW731HrXddfRb13d+v/kFWoHJs920d9e9VKu6sY2THZCrILc2kbrVUi7YdGKBomGtmDy3TaaLo/xi4i+u9Kt/mIOky0ePWbdyKJpAUDRjQsWzRvkxhg9PtXVjNG0XEcPTnVPJFyxBuHd+CD39w9T9NOjiOYTnSasG6UXY1OKHpiiaaRZd2NTej3m2U8af6qdtm7+jv7oC1FC6AcwIRrydUUDfMoU2E8eSWjVBCISX1a/aZl/rTubgk/0Ehi21PO9hiqFymCmZ+RDbwimzF4Fosu9uwKX1l9gjObjxfsOLpKz2mpMeuSNmP/StiMJyZuX5hbTiEuyJY6/FUOrC1lKLMzk7CcPyR3IolXlNvfhxHXynXrTm4KV4dzlGrUDKynD0l02q7uZKm+wEmMbDu644ThSTiawlGTbJNn0yH6LNx/CUvhA3tzJuu81UmlA4ZBtSVWGnYt+z6qZu1CIZNlG2tbktc+SX6ZQKTps/+0rYusajLT9Fypw9misR29Qq/CjFkcfhq2zBrW4fEDk5Nvqkb/CRjjj8lhL3jDUGhrs7Ls8jJM3DP1H2Er4OUIc6xO763iE6Ofg85q+zzTHg88NHNdu7JA5+NH4Bg70N3YNEfzyZONXPsEvqv799VrwS0F72S/urjK/ZP+nC1hX18b/52V3oCv6nzq1IKvFWbs/AAAAAElFTkSuQmCC'
const LineQR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAABn0lEQVR42u2ZUW4DIQxELXGAPZKvvkfiAEiuPQMJ20b9qPqxI+0qQQm8fIywx4ZY/P6c9gAP8AB/A07L5zij1zhsjWZaQL7HETmD0UcCx5wXAkYtpUxv3VMjyLOE6wExsFQMlGoCJ5dyvuWMIMCQy8SphO+U/CEmbw4w/cf++uQP9wam6TJrCHzyagHAcoPMW0n2sWE6QJUSJEuk0hblxq3bXhYVgOBkCazYi5cVSAGQ2bEKpqGywAGEgBVv3UnmTlVlCTGgrahru+QtsyQAeK+jY3QWFDixSwFVPqCxtqyYCNqyFoAlY7Ig8GBi3cQASKsZLC0fPqWAmOeO2esm6fY9cTSAtxUf2DiUGC2Ah1lWdoqllUkBlTisJux1ofHSw0gA2CCPxeSrhO9WrACs1t3oACRt72EUgNmT0IGLxwn94nL3B2ZwlQ+v4hJsV5QAHmmnjyHx522DFsBeCx0jM8jwKzGAF1YBmWx9EYGmCLw2CMXFfsqUAHi30PA15qgEzF5r3Ujz87h69f0Bpr/Ng7nPvTOXAp5/ox7gAf4b+AJG/0Zmzyf/ZQAAAABJRU5ErkJggg=='

const LineColor = colors.greenLine

const lineQRCodeUrl = 'https://line.me/ti/p/@venuee'

const ButtonRender = () => {
	return (
		<Button
			className="px-2 p-0 text-white"
			color="muted"
			style={{
				backgroundColor: LineColor,
			}}
		>
			<img src={LineIcon} alt="Line-icon" height={40} className="mr-1 my-0" title="Line-icon" />
			<span className="mr-2">
				<b>@venuee</b>
			</span>
		</Button>
	)
}

interface IState {
    modal: any;
}

interface IProps {
    className?: any;
}

export class LineButton extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			modal: false,
		}
	}

	toggle = () => {
		if (isMobile) {
			window.location.href = lineQRCodeUrl
		} else {
			this.setState(prevState => ({
				modal: !prevState.modal,
			}))
		}
	}

	render() {
		return (
			<div className="mb-2">
				<div onClick={() => this.toggle()}>{this.props.children || <ButtonRender />}</div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					contentClassName="border-0"
				>
					<ModalHeader
						toggle={this.toggle}
						cssModule={{ 'modal-title': 'w-100 text-center font-weight-light' }}
					>
						<span style={{ marginLeft: 40 }}>Scan QR Code For Contact Us</span>
					</ModalHeader>
					<ModalBody>
						<div className="d-flex justify-content-center">
							<img className="mb-0" src={LineQR} alt="Line-QR" />
						</div>
						<p className="m-0 text-center" style={{ color: 'rgba(0,0,0,0.5)' }}>
							Line: @venuee
						</p>
					</ModalBody>
					<a href="line://ti/p/@venuee">
						<ModalFooter
							className="justify-content-center font-weight-light text-white"
							style={{
								backgroundColor: LineColor,
							}}
						>
							Open with Line
						</ModalFooter>
					</a>
				</Modal>
			</div>
		)
	}
}
