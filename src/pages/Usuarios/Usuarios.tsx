import { Link } from 'react-router-dom'
import {
  ActionButton,
  ActionButtonVariant,
} from '../../components/ActionButton'
import { PageLayout } from '../../components/PageLayout/PageLayout'
import { routes } from '../../routes/routes'
export const UsuariosPage = () => {
  return (
    <PageLayout
      title="Usuarios"
      rightAddon={
        <Link to={routes.usuariosCreate.path}>
          <ActionButton variant={ActionButtonVariant.create} />
        </Link>
      }
    >
      <button>hi</button>
    </PageLayout>
  )
}
