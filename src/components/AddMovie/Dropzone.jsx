import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { LinearProgress } from "@material-ui/core"
import { isMobile } from "../../utils"

import "./Dropzone.scss"

export default function Dropzone({setImage}) {
  const [progress, setProgress] = useState(0)
  const [onSuccess, setOnSuccess] = useState(false)
  const [onError, setOnError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
	
	const onDrop = useCallback((acceptedFile, rejectedFile) => {
		acceptedFile.forEach((e) => {
			setIsLoading(true)

      const imageReader = new FileReader()

      imageReader.onprogress = (e) =>
				setProgress(Math.round(e.loaded * 100 / e.total))

      imageReader.onerror = () => setOnError(true)

      imageReader.onload = (e) => {
				setImage(e.target.result)
        setIsLoading(false)
        setOnSuccess(true)
      }

      imageReader.readAsDataURL(e)
    })

		rejectedFile.forEach((e) => {
			setOnError(true)
		})
	}, [setImage])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: 'image/*, video/*'
	})

	return(
		<div className="root">
			{ isLoading ? (

				<div className="dropzone__loading">
					<p>
						<span>Cargando <b>{progress}%</b></span>
					</p>

					<div className="dropzone__loading__bar">
						<LinearProgress variant="determinate" value={progress} />
					</div>

					<p onClick={() => setIsLoading(false)}>
						<b>Cancelar</b>
					</p>
				</div>

			) : onError ? (

				<div className="dropzone__loading">
					<p>
						<span><b>¡ERROR!</b> No se pudo cargar la película</span>
					</p>

					<div className="dropzone__loading__bar-error">
						<LinearProgress variant="determinate" value={100} />
					</div>

					<p onClick={() => setOnError(false)}>
						<b>Reintentar</b>
					</p>
				</div>

			) : onSuccess ? (

				<div className="dropzone__loading">
					<p>
						<b>100% Cargado</b>
					</p>

					<div className="dropzone__loading__bar-success">
						<LinearProgress variant="determinate" value={100} />
					</div>

					<p style={{color: "#64EEBC", cursor: "default"}}>
						¡Listo!
					</p>
				</div>

			) : (
				<div {...getRootProps({ className: 'dropzone' })}>
					<input {...getInputProps()} />
					<div className="dropzone__helper">
						<svg width="16" height="16" viewBox="0 0 18 18" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082Z" fill="white"/>
							<path d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082" stroke="white"/>
						</svg>

						{isMobile(600) ? 
							<>Agregá un archivo</>
							: 
							<>
								<b className="pointer">Agregá un archivo</b> o arrastralo y soltalo aquí
							</>
						}
					</div>
				</div>
			)}

		</div>
	)
}